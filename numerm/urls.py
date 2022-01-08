from django.urls import path
from . import views

app_name = 'numerm'
urlpatterns = [
	# toc path
	path("toc", views.toc, name="toc"),

	# basic algebra paths
	path("balg_cheatsheet", views.balg_cheatsheet, name="balg_cheatsheet"),

	path("balg_preface", views.balg_preface, name="balg_preface"),

	path("balg_realProperties", views.balg_realProperties, name="balg_realProperties"),

	path("balg_equations", views.balg_equations, name="balg_equations"),

	path("balg_proportion", views.balg_proportion, name="balg_proportion"),

	path("balg_quadratics", views.balg_quadratics, name="balg_quadratics"),

	path("balg_rationalExpressions", views.balg_rationalExpressions, name="balg_rationalExpressions"),

	path("balg_absoluteValue", views.balg_absoluteValue, name="balg_absoluteValue"),

	path("balg_complexNumbers", views.balg_complexNumbers, name="balg_complexNumbers"),

	path("balg_mathese", views.balg_mathese, name="balg_mathese"),

	path("balg_matrices", views.balg_matrices, name="balg_matrices"),

	# geometry paths
	path("geo_preface", views.geo_preface, name="geo_preface"),

	path("geo_foundations", views.geo_foundations, name="geo_foundations"),

	path("geo_trig", views.geo_trig, name="geo_trig"),

	# logic paths
	path("log_preface", views.log_preface, name="log_preface"),

	path("log_propositional", views.log_propositional, name="log_propositional"),

	path("log_arguments", views.log_arguments, name="log_arguments"),

	path("log_predicateCalculus", views.log_predicateCalculus, name="log_predicateCalculus"),
	

	# discrete math paths
	path("disc_preface", views.disc_preface, name="disc_preface"),

	path("disc_induction", views.disc_induction, name="disc_induction"),

	path("disc_invariants", views.disc_invariants, name="disc_invariants"),

	path("disc_strongInduction", views.disc_strongInduction, name="disc_strongInduction"),

	path("disc_numberTheory", views.disc_numberTheory, name="disc_numberTheory"),

	path("disc_variables", views.disc_variables, name="disc_variables"),

	path("disc_setTheory", views.disc_setTheory, name="disc_setTheory"),

	path("disc_openSentences", views.disc_openSentences, name="disc_openSentences"),

	path("disc_strings", views.disc_strings, name="disc_strings"),

	path("disc_relations", views.disc_relations, name="disc_relations"),

	path("disc_functionsRelations", views.disc_functionsRelations, name="disc_functionsRelations"),

	path("disc_logicCircuits", views.disc_logicCircuits, name="disc_logicCircuits"),

	path("disc_combinatorics", views.disc_combinatorics, name="disc_combinatorics"),

	path("disc_algorithms", views.disc_algorithms, name="disc_algorithms"),

	path("disc_graphTheory", views.disc_graphTheory, name="disc_graphTheory"),

	path("disc_probability", views.disc_probability, name="disc_probability"),


	
	# continuous math paths
	path("", views.index, name="index"),

	path("cont_intervals", views.cont_intervals, name="cont_intervals"),

	path("cont_cartesianPlane", views.cont_cartesianPlane, name="cont_cartesianPlane"),

	path("cont_distanceFormula", views.cont_distanceFormula, name="cont_distanceFormula"),

	path("cont_graphLines", views.cont_graphLines, name="cont_graphLines"),

	path("cont_introFunctions", views.cont_introFunctions, name="cont_introFunctions"),

	path("cont_functionBehaviors", views.cont_functionBehaviors, name="cont_functionBehaviors"),

	path("cont_commonDomainMistakes", views.cont_commonDomainMistakes, name="cont_commonDomainMistakes"),

	path("cont_graphsFunctions", views.cont_graphsFunctions, name="cont_graphsFunctions"),

	path("cont_graphAbsoluteValue", views.cont_graphAbsoluteValue, name="cont_graphAbsoluteValue"),

	path("cont_graphExponential", views.cont_graphExponential, name="cont_graphExponential"),

	path("cont_graphLog", views.cont_graphLog, name="cont_graphLog"),

	path("cont_graphSquaring", views.cont_graphSquaring, name="cont_graphSquaring"),

	path("cont_graphCubic", views.cont_graphCubic, name="cont_graphCubic"),

	path("cont_graphReciprocal", views.cont_graphReciprocal, name="cont_graphReciprocal"),

	path("cont_graphSquareRoot", views.cont_graphSquareRoot, name="cont_graphSquareRoot"),

	path("cont_graphSemiCircle", views.cont_graphSemiCircle, name="cont_graphSemiCircle"),

	path("cont_piecewiseFunctions", views.cont_piecewiseFunctions, name="cont_piecewiseFunctions"),

	path("cont_implicitFunctions", views.cont_implicitFunctions, name="cont_implicitFunctions"),

	path("cont_graphAnalysis", views.cont_graphAnalysis, name="cont_graphAnalysis"),

	path("cont_averageRateOfChange", views.cont_averageRateOfChange, name="cont_averageRateOfChange"),

	path("cont_functionComposition", views.cont_functionComposition, name="cont_functionComposition"),

	path("cont_introTrigFunctions", views.cont_introTrigFunctions, name="cont_introTrigFunctions"),

	path("cont_trigFunctions", views.cont_trigFunctions, name="cont_trigFunctions"),

	path("cont_transcendentalFunctions", views.cont_transcendentalFunctions, name="cont_transcendentalFunctions"),

	# linear algebra paths
	path("lin_intro", views.lin_intro, name="lin_intro"),

	path("lin_systems", views.lin_systems, name="lin_systems"),
	

	# calculus paths
	path("calc_preface", views.calc_preface, name="calc_preface"),

	path("calc_reals", views.calc_reals, name="calc_reals"),

	path("calc_thederivative", views.calc_thederivative, name="calc_thederivative"),

	path("calc_derivativePowerFunction", views.calc_derivativePowerFunction, name="calc_derivativePowerFunction"),
	
	path("calc_rateOfChange", views.calc_rateOfChange, name="calc_rateOfChange"),

	path("calc_limits", views.calc_limits, name="calc_limits"),
	
	path("calc_trigDerivatives", views.calc_trigDerivatives, name="calc_trigDerivatives"),

	path("calc_generalRules", views.calc_generalRules, name="calc_generalRules"),

	path("calc_implicit", views.calc_implicit, name="calc_implicit"),

	path("calc_exponentials", views.calc_exponentials, name="calc_exponentials"),

	path("calc_derivativeApplications", views.calc_derivativeApplications, name="calc_derivativeApplications"),

	# sequences & series paths 
	path("sqs_index", views.sqs_index, name="sqs_index"),

	path("sqs_foundations", views.sqs_foundations, name="sqs_foundations"),

	# physics paths

	path("phys_vectors", views.phys_vectors, name="phys_vectors"),

	path("phys_1dmotion", views.phys_1dmotion, name="phys_1dmotion"),

	# economics paths
	path("econ_preface", views.econ_preface, name="econ_preface"),
]