package org.molgenis.navigator;

import org.molgenis.data.DataService;
import org.molgenis.data.Entity;
import org.molgenis.data.meta.model.Package;
import org.molgenis.data.meta.model.PackageMetadata;
import org.molgenis.ui.MolgenisPluginController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static java.util.Objects.requireNonNull;
import static java.util.stream.Collectors.toList;
import static org.molgenis.navigator.NavigatorController.URI;
import static org.springframework.web.bind.annotation.RequestMethod.GET;

@Controller
@RequestMapping(URI)
public class NavigatorController extends MolgenisPluginController
{
	public static final String URI = PLUGIN_URI_PREFIX + "navigator";

	private DataService dataService;

	public NavigatorController(DataService dataService)
	{
		super(URI);
		this.dataService = requireNonNull(dataService);
	}

	@RequestMapping(method = GET)
	public String init(Model model)
	{
		List<Package> rootPackages = dataService.findAll(PackageMetadata.PACKAGE, Package.class).filter(entity ->
		{
			Object parent = entity.get(PackageMetadata.PARENT);
			return parent == null;
		}).collect(toList());

		model.addAttribute("rootPackages", rootPackages);
		return "view-navigator";
	}

}
