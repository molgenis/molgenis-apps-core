package org.molgenis.navigator;

import org.molgenis.ui.MolgenisPluginController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import static org.molgenis.navigator.NavigatorController.URI;

@Controller
@RequestMapping(URI)
public class NavigatorController extends MolgenisPluginController
{
	public static final String URI = PLUGIN_URI_PREFIX + "navigator";

	public NavigatorController()
	{
		super(URI);
	}

	@RequestMapping(method = RequestMethod.GET)
	public String init()
	{
		return "view-navigator";
	}
}
