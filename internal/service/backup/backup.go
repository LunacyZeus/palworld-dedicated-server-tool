package backup

import (
	"errors"
	"fmt"
	"os"
	"palworld-chan/pkg/logger"
)

type BackupService struct {
	name   string
	token  string
	nodeID string
}

func New(name string, token string, nodeID string) BackupService {
	return BackupService{
		name:   name,
		token:  token,
		nodeID: nodeID,
	}
}

func LocalBackUp(sourceDir, destinationDir string, maxBackupCount int) (err error) {
	//sourceDir := "/path/to/source/directory" // 源目录
	//destinationDir := "/path/to/backup"      // 备份文件位置 不带文件名

	//maxBackupCount := 5      // 最大历史备份数量
	backupFileName := "pal_" // 备份文件名前缀

	// 检测源目录是否存在
	_, err = os.Stat(sourceDir)
	if os.IsNotExist(err) {
		err = errors.New("Error: Source directory does not exist.")
		return
	}

	_, err = os.Stat(destinationDir)

	// 检测目标目录是否存在
	if os.IsNotExist(err) {
		err = errors.New("Error: Destination directory does not exist.")
		return
	}

	timeStr := GetNowTime()
	destinationFilePath := fmt.Sprintf("%s/%s%s.zip", destinationDir, backupFileName, timeStr)

	logger.Info("Backup file now in %s", destinationFilePath)

	err = ZipDirectory(sourceDir, destinationFilePath)
	if err != nil {
		err = errors.New(fmt.Sprintf("Error:%v", err))
		return
	}

	//logger.Info("Backup successful!")

	// 删除多余的历史备份文件
	cleanupOldBackups(destinationDir, backupFileName, maxBackupCount)
	return
}
