package org.molgenis.navigator;

import org.mockito.InjectMocks;
import org.springframework.context.annotation.Configuration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import static org.mockito.MockitoAnnotations.initMocks;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;

@Configuration
@EnableWebMvc
public class NavigatorControllerTest
{

	private MockMvc mockMvc;

	@InjectMocks
	private NavigatorController navigatorController;

	@BeforeMethod
	public void before()
	{
		initMocks(this);

		mockMvc = MockMvcBuilders.standaloneSetup(navigatorController).build();
	}


	/**
	 * Test that a get call to the plugin returns the correct view
	 */
	@Test
	public void testInit() throws Exception
	{
		mockMvc.perform(get(NavigatorController.URI))
				.andExpect(status().isOk())
				.andExpect(view().name("view-navigator"));
	}

}