(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{385:function(e,t,r){"use strict";r.r(t);var n=r(43),o=Object(n.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h4",{attrs:{id:"use-powershell-within-azure-cloud-shell"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#use-powershell-within-azure-cloud-shell","aria-hidden":"true"}},[e._v("#")]),e._v(" Use PowerShell within Azure Cloud Shell")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/bashscreenshot.png")}}),e._v(" "),r("p",[r("strong",[e._v("PowerShell")]),e._v(" is the other command language that the Azure Cloud Shell supports. I've recently "),r("a",{attrs:{href:"https://aka.ms/PSCloudSignup?WT.mc_id=akams-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("signed up for a preview"),r("OutboundLink")],1),e._v(" and thought I'd share.")]),e._v(" "),r("p",[e._v("You can switch to PowerShell by clicking the dropdown and selecting PowerShell.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/switchtops.png")}}),e._v(" "),r("p",[e._v("This will prompt you to Restart Cloud Shell with PowerShell which will log you out of your current instance and stop any running processes.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/restartwithps.png")}}),e._v(" "),r("p",[e._v("On first launch, it'll authenticate with Azure (just like BASH does) and build your Azure drive. You now have access to all your accounts. You can run the "),r("code",[e._v("dir")]),e._v(" command and see your subscriptions vs with BASH it would list out the physical files on the currently mounted drive.")]),e._v(" "),r("pre",[r("code",[e._v("PS Azure:\\> dir\n\n    Directory: Azure:\n\nMode SubscriptionName                     SubscriptionId                       TenantId                             State\n---- ----------------                     --------------                       --------                             -----\n+    Demo - Azure Monitoring\t\t\t\txxx-xxx-xxx-xxx\t\t\t\t\t\txxx-xxx-xxx-xxx \t\t\t\t\tEnabled\n")])]),e._v(" "),r("p",[e._v('Now that I have access to my subscriptions, I can traverse the "Demo - Azure Monitor" subscription by typing '),r("code",[e._v("cd '.\\Demo - Azure Monitoring\\'")]),e._v(".")]),e._v(" "),r("p",[e._v("If I run a "),r("code",[e._v("dir")]),e._v(" again, then I'd see what is included in that account. Here I see Resource Groups, Storage Accounts, VMs and Web Apps.")]),e._v(" "),r("pre",[r("code",[e._v("Directory: Azure:\\Demo - Azure Monitoring\n\n\nMode Name\n---- ----\n+    AllResources\n+    ResourceGroups\n+    StorageAccounts\n+    VirtualMachines\n+    WebApps\n")])]),e._v(" "),r("p",[e._v("I can continue traversing this subscription by typing "),r("code",[e._v("cd VirtualMachines")]),e._v(" then typing "),r("code",[e._v("dir")]),e._v(".")]),e._v(" "),r("p",[e._v("Directory: Azure:\\Demo - Azure Monitoring\\VirtualMachines")]),e._v(" "),r("pre",[r("code",[e._v("Name                  ResourceGroupName      Location          VmSize  OsType                       NIC ProvisioningState PowerState\n----                  -----------------      --------          ------  ------                       --- ----------------- ----------\nk8s-a   APPROVAL        eastus  Standard_D2_v2   Linux  -nic-0         Succeeded    running\n")])]),e._v(" "),r("p",[e._v("As you can tell, I can easily discover and navigate Azure resources now by using Powershell.")]),e._v(" "),r("p",[e._v("The other nice thing that I've seen while playing with PowerShell is the ability to run modules such as the ones found in Microsoft.PowerShell. For instance we can use "),r("code",[e._v("Get-Date")]),e._v(" as described "),r("a",{attrs:{href:"https://docs.microsoft.com/powershell/module/microsoft.powershell.utility/get-date?view=powershell-5.1?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(" inside of Cloud Shell.")]),e._v(" "),r("pre",[r("code",[e._v("PS Azure:\\> Get-Date\n\nMonday, September 18, 2017 11:02:49 PM\n")])])])},[],!1,null,null,null);t.default=o.exports}}]);