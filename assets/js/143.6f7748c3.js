(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{437:function(e,t,r){"use strict";r.r(t);var a=r(43),i=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/networking/networking-overview/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Virtual Networking"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("This post was brought to you by "),r("strong",[r("a",{attrs:{href:"https://twitter.com/kumarallamraju",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kumar Allamraju"),r("OutboundLink")],1)]),e._v(".")]),e._v(" "),r("p",[e._v("Azure Networking (VNet) allows customers to expand their Virtual Networkx by adding secondary IPv4 address ranges (CIDRs) to their VNets. Customers can add the secondary CIDR blocks to the VNet directly from the Azure Portal or by using the Azure CLI, Powershell.")]),e._v(" "),r("h4",{attrs:{id:"adding-a-new-cidr-to-an-existing-virtual-network"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-new-cidr-to-an-existing-virtual-network","aria-hidden":"true"}},[e._v("#")]),e._v(" Adding a new CIDR to an existing Virtual Network")]),e._v(" "),r("ol",[r("li",[e._v("Sign in to Azure Portal (https://portal.azure.com)")]),e._v(" "),r("li",[e._v("Navigate to Virtual Network blade. Choose your existing VNet. e.g. myvNet")]),e._v(" "),r("li",[e._v("Click on Settings >> Address Space")]),e._v(" "),r("li",[e._v("Add a new CIDR space e.g. I already have 10.0.0.0/16 configured as primary CIDR. So I add 192.168.0.0/16 as secondary CIDR block.")]),e._v(" "),r("li",[e._v("Click Save button to save the changes.")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/azurevnetcidr-file1.jpg")}}),e._v(" "),r("ol",{attrs:{start:"6"}},[r("li",[e._v("Click on Settings >> Subnets, +Subnet")]),e._v(" "),r("li",[e._v("Add a new subnet e.g. Subnet Name: subnetB, enter a new subnet range that falls under the secondary CIDR space i.e. 192.168.0.0/24. Save the changes.")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/azurevnetcidr-file2.jpg")}}),e._v(" "),r("ol",{attrs:{start:"8"}},[r("li",[e._v("Now provision a new virtual machine using the subnetB that was created above.")])]),e._v(" "),r("h4",{attrs:{id:"a-sample-architecture-with-one-cidr-and-two-cidrs-is-shown-below"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a-sample-architecture-with-one-cidr-and-two-cidrs-is-shown-below","aria-hidden":"true"}},[e._v("#")]),e._v(" A sample architecture with one CIDR and two CIDRs is shown below")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/azurevnetcidr-file3.jpg")}}),e._v(" "),r("h4",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),r("p",[e._v("Adding a new CIDR to an existing VNet has two key benefits. First, customers, who are launching more and more resources in their VNets, can now scale up their VNets on-demand. Second, customers no longer have to over-allocate private IPv4 space to their VNets - they can allocate only what is required at the VNet creation time, and later expand it as needed. With these benefits, this feature can make it significantly easier for customers to manage their private IPv4 address space. There is no additional charge to use this feature. This feature is available in all Azure regions.")]),e._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/virtual-network/quick-create-portal?toc=%2fazure%2fnetworking%2ftoc.json?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating a Virtual Network using Azure Portal"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://docs.microsoft.com/en-us/cli/azure/network/vnet?view=azure-cli-latest#az-network-vnet-create?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating a Virtual Network using Azure CLI"),r("OutboundLink")],1)])])])])},[],!1,null,null,null);t.default=i.exports}}]);