from django.urls import path
from . import views

app_name = 'numerm'
urlpatterns = [
	# toc path
	path("toc", views.toc, name="toc"),

	# basic algebra paths
	path("balg_preface", views.balg_preface, name="balg_preface"),
	path("balg_realProperties", views.balg_realProperties, name="balg_realProperties"),
	path("balg_equations", views.balg_equations, name="balg_equations"),
	path("balg_proportion", views.balg_proportion, name="balg_proportion"),
	path("balg_exponents", views.balg_exponents, name="balg_exponents"),
	path("balg_radicals", views.balg_radicals, name="balg_radicals"),
	path("balg_rationalizingDenominators", views.balg_rationalizingDenominators, name="balg_rationalizingDenominators"),
	path("balg_nthRoot", views.balg_nthRoot, name="balg_nthRoot"),
	path("balg_rationalExponents", views.balg_rationalExponents, name="balg_rationalExponents"),
	path("balg_rationalExpressions", views.balg_rationalExpressions, name="balg_rationalExpressions"),
	path("balg_absoluteValue", views.balg_absoluteValue, name="balg_absoluteValue"),
	
	# discrete math paths
	path("disc_preface", views.disc_preface, name="disc_preface"),
	path("disc_induction", views.disc_induction, name="disc_induction"),
	path("disc_invariants", views.disc_invariants, name="disc_invariants"),
	path("disc_strongInduction", views.disc_strongInduction, name="disc_strongInduction"),
	path("disc_numberTheory", views.disc_numberTheory, name="disc_numberTheory"),
	path("disc_variables", views.disc_variables, name="disc_variables"),
	path("disc_setTheory", views.disc_setTheory, name="disc_setTheory"),
	path("disc_openSentences", views.disc_openSentences, name="disc_openSentences"),
	path("disc_orderedPairs", views.disc_orderedPairs, name="disc_orderedPairs"),
	path("disc_tuples", views.disc_tuples, name="disc_tuples"),
	path("disc_strings", views.disc_strings, name="disc_strings"),
	path("disc_relations", views.disc_relations, name="disc_relations"),
	path("disc_functionsRelations", views.disc_functionsRelations, name="disc_functionsRelations"),
	path("disc_logic", views.disc_logic, name="disc_logic"),
	path("disc_logicCircuits", views.disc_logicCircuits, name="disc_logicCircuits"),
	path("disc_counting", views.disc_counting, name="disc_counting"),
	
	# continuous math paths
	path("", views.index, name="index"),
	path("cont_setTheoryReview", views.cont_setTheoryReview, name="cont_setTheoryReview"),
	path("cont_intervals", views.cont_intervals, name="cont_intervals"),
	path("cont_cartesianPlane", views.cont_cartesianPlane, name="cont_cartesianPlane"),
	path("cont_pythagoreanCartesian", views.cont_pythagoreanCartesian, name="cont_pythagoreanCartesian"),
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
	path("cont_angles", views.cont_angles, name="cont_angles"),
	path("cont_radiansDegrees", views.cont_radiansDegrees, name="cont_radiansDegrees"),
	path("cont_convertRadians", views.cont_convertRadians, name="cont_convertRadians"),
	path("cont_arcSector", views.cont_arcSector, name="cont_arcSector"),
	path("cont_rightAngleTrig", views.cont_rightAngleTrig, name="cont_rightAngleTrig"),
	path("cont_trigFunctions", views.cont_trigFunctions, name="cont_trigFunctions"),
	path("cont_transcendentalFunctions", views.cont_transcendentalFunctions, name="cont_transcendentalFunctions"),

	# linear algebra paths
	path("lin_intro", views.lin_intro, name="lin_intro"),
	

	# calculus paths
	path("calc_preface", views.calc_preface, name="calc_preface"),
	path("calc_reals", views.calc_reals, name="calc_reals"),
	path("calc_thederivative", views.calc_thederivative, name="calc_thederivative"),
	path("calc_derivativePowerFunction", views.calc_derivativePowerFunction, name="calc_derivativePowerFunction"),
	path("calc_rateOfChange", views.calc_rateOfChange, name="calc_rateOfChange"),
	path("calc_limits", views.calc_limits, name="calc_limits"),
	path("calc_derivativeFormulas", views.calc_derivativeFormulas, name="calc_derivativeFormulas"),
]