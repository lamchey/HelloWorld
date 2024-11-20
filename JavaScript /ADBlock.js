// 覆写脚本
// 作者：https://github.com/lamchey
// 项目地址：https://github.com/lamchey/HelloWorld
// 时间：2024-11-20-14-47
function main(config) {

  if (!config['rule-providers']) {
    config['rule-providers'] = {};
  }
  config["rule-providers"] = Object.assign(config["rule-providers"], {
    AWAvenueAds: {
      url:  "https://ghp.ci/https://raw.githubusercontent.com/TG-Twilight/AWAvenue-Ads-Rule/main//Filters/AWAvenue-Ads-Rule-Clash.yaml",
      path: "./ruleset/AWAvenueAds.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
	  antiAD: {
      url: "https://ghp.ci/https://raw.githubusercontent.com/privacy-protection-tools/anti-AD/master/anti-ad-clash.yaml",
      path: "./ruleset/anti-AD.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
	antiADwhite: {
      url: "https://ghp.ci/https://raw.githubusercontent.com/privacy-protection-tools/dead-horse/master/anti-ad-white-for-clash.yaml",
      path: "./ruleset/anti-AD-white.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    }
  });

  config["+rules"] = [
    "RULE-SET,antiADwhite,DIRECT",
    "RULE-SET,AWAvenueAds,REJECT-NO-DROP", 
    "RULE-SET,antiAD,REJECT-NO-DROP"
  ];
  return config;
}
