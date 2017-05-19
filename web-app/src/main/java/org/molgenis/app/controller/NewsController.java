package org.molgenis.org.controller.app.controller;

import org.molgenis.ui.MolgenisPluginController;
import org.molgenis.ui.controller.AbstractStaticContentController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import static org.molgenis.org.controller.app.controller.NewsController.URI;

/**
 * Controller that handles news page requests
 */
@Controller
@RequestMapping(URI)
public class NewsController extends AbstractStaticContentController
{
	public static final String ID = "news";
	public static final String URI = MolgenisPluginController.PLUGIN_URI_PREFIX + ID;

	public NewsController()
	{
		super(ID, URI);
	}
}
