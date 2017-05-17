package org.molgenis.navigator;

import org.molgenis.framework.ui.MolgenisPluginFactory;
import org.molgenis.ui.MolgenisPluginController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;

import static org.molgenis.navigator.NavigatorController.URI;

@Controller
@RequestMapping(URI)
public class NavigatorController extends MolgenisPluginController
{
	public static final String URI = PLUGIN_URI_PREFIX + "navigator";

	@Autowired
	public NavigatorController(String uri, MolgenisPluginFactory molgenisPluginFactory)
	{
		super(uri, molgenisPluginFactory);
	}

	@RequestMapping(method = RequestMethod.GET)
	public String init(HttpServletRequest request, Model model)
	{
		return "view-gn-app";
	}
}
