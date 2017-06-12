package org.molgenis.metadata.manager.controller;

import org.molgenis.ui.MolgenisPluginController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import static org.molgenis.metadata.manager.controller.MetadataManagerController.URI;

@Controller
@RequestMapping(URI + "/**")
public class MetadataManagerController extends MolgenisPluginController
{
	public static final String METADATA_MANAGER = "metadata-manager";
	public static final String URI = PLUGIN_URI_PREFIX + METADATA_MANAGER;

	@Autowired
	public MetadataManagerController()
	{
		super(URI);
	}

	@RequestMapping
	public String init()
	{
		return "view-metadata-manager";
	}
}
