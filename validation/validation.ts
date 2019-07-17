class validation {
	isInWeiXin(): boolean {//是否为微信客户端环境（此时getPlatform可以为android、ios）
		return /MicroMessenger/i.test(navigator.userAgent);
	}
	isInAndroid(): boolean {//是否安卓
		return /Android/i.test(navigator.userAgent);
	}
	isPC(): boolean {
		let userAgentInfo = navigator.userAgent,
			Agents = ["Android", "iPhone",
				"SymbianOS", "Windows Phone",
				"iPad", "iPod"],
			flag = true;
		for (let v = 0; v < Agents.length; v++) {
			if (userAgentInfo.indexOf(Agents[v]) > 0) {
				flag = false;
				break;
			}
		}
		return flag;
	}

	/*
      手机号验证
	  mobile:手机号

    */
	mobile(mobile: string|number): boolean {// 
		mobile=mobile as string;
		return  /^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(mobile);

	}
	/*
      邮箱号验证
	  mail:邮箱号

    */
	mail(mail: string): boolean {
		return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(mail);
	}
	/*
      姓名验证
	  name:姓名 支持中文最长30个字符

    */
	name(name: string): boolean {
		if (name != '' && name.length <= 30 && /^([\u4E00-\uFA29]|[\uE7C7-\uE7F3])*$/.test(name)) {
			return true;
		} else {
			return false;
		}

	}
	/*
      身份证验证
	  idNo:身份证号 18位数字、17位数字加字母X，
    */
	idNo(idNo: number | string): boolean {
		idNo = idNo as string;//将身份证强制转换成字符形式
		if (!idNo) {
			return false
		}
		return /^(\d{18,18}|\d{17,17}(x|X))$/.test(idNo);
	}
	/*
      身份证验证(支持15位)
	  idNo:身份证号 18位数字、17位数字加字母X，
    */
	idNoShort(idNo: number | string): boolean {
		idNo = idNo as string;//将身份证强制转换成字符形式
		if (!idNo) {
			return false;
		}
		return /^(\d{18,18}|\d{15,15}|\d{17,17}(x|X))$/.test(idNo);
	}
	/*
      数字字母验证
	  value:字符串 
    */
	alphanumeric(value: number | string): boolean {
		value = value as string
		if (!value) {
			return false;
		}
		return /^[0-9a-zA-Z]*$/.test(value)

	}
	/*
		字母验证
		value:字符串 
	*/
	alphabet(value: string): boolean {
		if (!value) {
			return false;
		}
		return /^[0-9]*$/.test(value);
	}
	/*
      车牌号验证
	  carNo:车牌号 第一个字位中文，第二个字位字母 ,最后一位可以是中文或者字母数字(7位或者8位)
    */
	carNo(carNo: string): boolean {
		return /^[\u4e00-\u9fa5]{1}[a-zA-Z]{1}[a-zA-Z0-9]{4,5}([a-zA-Z0-9]|[\u4e00-\u9fa5]|[\uE7C7-\uE7F3]){1}$/.test(carNo);
	}

	/*
		  手机IMEI号验证
		  carNo：15位数字
		*/
	imeiNo(imeiNo: string | number): boolean {
		imeiNo = imeiNo as string;
		return /^[0-9]{15}$/.test(imeiNo)
		
	}
	/*
      发动机验证
	  engine:发动机号 字母、数字、*号组成的6位以上字符，
    */

	engine(engine: string): boolean {
		if (engine && engine.length > 5 && /^[a-zA-Z0-9*]*$/.test(engine)) {
			return true;
		} else {
			return false;
		}
	}
	/*
		  车辆识别码验证
		  VIN:车辆识别码 字母、数字组成的17位字符
		*/

	VIN(VIN: string): boolean {
		return /^[a-zA-Z0-9]{17}$/.test(VIN)
	}
}