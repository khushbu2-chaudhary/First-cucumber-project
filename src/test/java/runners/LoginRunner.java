package runners;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
	features="src/test/java/features/TechfiosLogin.feature",
	glue="stepDefinitions",
	tags="@OtherScinerio4",
	monochrome=true,
	dryRun=false,
	plugin= {
			"pretty",
			"html:target/reports/cucumber.html",
			"json:target/reports/cucumber.jason"
	}
		
		
		
		)
public class LoginRunner {

}
