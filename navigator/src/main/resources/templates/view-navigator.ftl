<!doctype html>
<html lang="en">
<head>
    <title>Diagnostics platform</title>
    <meta charset="utf-8">
    <link rel="shortcut icon" href="/js/favicon.ico">
    <link href="/css/app.css" rel="stylesheet">
</head>
<body>
<div id="app">
    <h1>Hello Navigator!</h1>
    <#list rootPackages as package>
        ${package.id}<br/>
    </#list>
</div>
<script type="text/javascript">
<#list rootPackages as package>
        rootPackages.append(${package.id})
    </#list>
    console.log(roo)
</script>
<script type=text/javascript src=/js/manifest.js></script>
<script type=text/javascript src=/js/vendor.js></script>
<script type=text/javascript src=/js/app.js></script>
</body>
</html>