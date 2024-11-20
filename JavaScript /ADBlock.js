// 覆写脚本
// 作者：https://github.com/lamchey
// 项目地址：https://github.com/lamchey/HelloWorld
// 时间：2024-11-30-14-37
function main(config) {
  AWAvenueAds:
    url:  https://ghp.ci/https://raw.githubusercontent.com/TG-Twilight/AWAvenue-Ads-Rule/main//Filters/AWAvenue-Ads-Rule-Clash.yaml
    path: ./ruleset/AWAvenueAds.yaml
    behavior: domain
    interval: 86400
    format: yaml
    type: http
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
    },
	Custom_rules_Reject: {
      url: "https://ghp.ci/https://raw.githubusercontent.com/lamchey/HelloWorld/refs/heads/main/Rules/Reject.list",
      path: "./ruleset/Custom_rules_Reject.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
  });

  config["+rules"] = [
    "RULE-SET,antiADwhite,DIRECT",
    "RULE-SET,AWAvenueAds,REJECT-NO-DROP", 
    "RULE-SET,antiAD,REJECT-NO-DROP"， 
    "RULE-SET,Custom_rules_Reject,REJECT-NO-DROP",
    
  ];
  return config;
}
