package org.molgenis.navigator;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.molgenis.data.DataService;
import org.molgenis.framework.ui.MolgenisPluginRegistry;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import static org.mockito.MockitoAnnotations.initMocks;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = { "org.molgenis.navigator"})
public class NavigatorControllerTest
{

	@Mock
	private DataService dataService;

	@Mock
	private MolgenisPluginRegistry molgenisPluginRegistry;

	private MockMvc mockMvc;

	@InjectMocks
	private NavigatorController navigatorController;

	@BeforeMethod
	public void before()
	{
		initMocks(this);

		mockMvc = MockMvcBuilders.standaloneSetup(navigatorController).build();
	}

	@Test
	public void testInit() throws Exception
	{
		mockMvc.perform(get(NavigatorController.URI)).andExpect(status().isOk());
	}

}