package dao

import (
	"palworld-chan/internal/consts"
	"palworld-chan/internal/service/api/models"
	"palworld-chan/pkg/utility/utils"
)

func ServerSetting() (updateServerSetting *models.UpdateServerSettingInput, err error) {
	//从持久层解析到结构体
	serverSettingJson, err := Get(consts.BUCKET, "serverSetting")

	if err != nil {
		//serverSetting 不存在 新建默认
		updateServerSetting = &models.UpdateServerSettingInput{
			ProcessName:     "PalServer-Win64-Test-Cmd.exe",
			ExecutablePath:  "F:/pal/steamapps/common/PalServer/PalServer.exe",
			MemoryThreshold: "90",
			CheckPeriod:     "80",
			RestartDelay:    "60",
			RconAddress:     "",
			RconPort:        "",
			RconPasswd:      "",
			SourceDir:       "",
			DestDir:         "",
			BackupTime:      "1800",
			BackupCount:     "200",
			AccessToken:     "",
			SecretKey:       "",
			Bucket:          "",
		}
		//保存到持久层
		// 转换为 JSON 字符串
		serverSettingJson, err = utils.ToJSONString(updateServerSetting)
		if err != nil {
			return
		}
		_ = Set(consts.BUCKET, "serverSetting", serverSettingJson)

	} else {
		// 解析 JSON 字符串到结构体
		err = utils.FromJSONString(serverSettingJson, &updateServerSetting)
		if err != nil {
			return
		}
	}

	return
}
