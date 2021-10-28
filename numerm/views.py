from django.shortcuts import render

# Create your views here.
def index(request):
	return render(request, "numerm/index.html")

# TOC
def toc(request):
	return render(request, "numerm/toc.html")

# basic algebra functions
def balg_preface(request):
	return render(request,"numerm/balg/balg_preface.html")

def balg_mathese(request):
	return render(request,"numerm/balg/balg_mathese.html")

def balg_realProperties(request):
	return render(request,"numerm/balg/balg_realProperties.html")

def balg_exponentsRadicals(request):
	return render(request,"numerm/balg/balg_exponentsRadicals.html")

def balg_logarithms(request):
	return render(request,"numerm/balg/balg_logarithms.html")

def balg_equations(request):
	return render(request,"numerm/balg/balg_equations.html")

def balg_quadratics(request):
	return render(request,"numerm/balg/balg_quadratics.html")

def balg_proportion(request):
	return render(request,"numerm/balg/balg_proportion.html")

def balg_rationalExpressions(request):
	return render(request,"numerm/balg/balg_rationalExpressions.html")

def balg_absoluteValue(request):
	return render(request,"numerm/balg/balg_absoluteValue.html")

def balg_complexNumbers(request):
	return render(request,"numerm/balg/balg_complexNumbers.html")

# geometry functions
def geo_preface(request):
	return render(request,"numerm/geo/geo_preface.html")

def geo_foundations(request):
	return render(request,"numerm/geo/geo_foundations.html")

def geo_trig(request):
	return render(request,"numerm/geo/geo_trig.html")

# Logic functions
def log_preface(request):
	return render(request,"numerm/log/log_preface.html")
def log_propositional(request):
	return render(request, "numerm/log/log_propositional.html")
def log_arguments(request):
	return render(request, "numerm/log/log_arguments.html")
def log_predicateCalculus(request):
	return render(request, "numerm/log/log_predicateCalculus.html")

# discrete math functions
def disc_preface(request):
	return render(request, "numerm/disc/disc_preface.html")

def disc_induction(request):
	return render(request, "numerm/disc/disc_induction.html")

def disc_invariants(request):
	return render(request, "numerm/disc/disc_invariants.html")

def disc_strongInduction(request):
	return render(request, "numerm/disc/disc_strongInduction.html")

def disc_numberTheory(request):
	return render(request, "numerm/disc/disc_numberTheory.html")

def disc_variables(request):
	return render(request, "numerm/disc/disc_variables.html")

def disc_setTheory(request):
	return render(request, "numerm/disc/disc_setTheory.html")

def disc_openSentences(request):
	return render(request, "numerm/disc/disc_openSentences.html")

def disc_strings(request):
	return render(request, "numerm/disc/disc_strings.html")

def disc_relations(request):
	return render(request, "numerm/disc/disc_relations.html")

def disc_functionsRelations(request):
	return render(request, "numerm/disc/disc_functionsRelations.html")

def disc_logicCircuits(request):
	return render(request, "numerm/disc/disc_logicCircuits.html")

def disc_combinatorics(request):
	return render(request, "numerm/disc/disc_combinatorics.html")

def disc_algorithms(request):
	return render(request, "numerm/disc/disc_algorithms.html")

# continuous math functions
def cont_intervals(request):
	return render(request, "numerm/cont/cont_intervals.html")

def cont_cartesianPlane(request):
	return render(request, "numerm/cont/cont_cartesianPlane.html")

def cont_pythagoreanCartesian(request):
	return render(request, "numerm/cont/cont_pythagoreanCartesian.html")

def cont_distanceFormula(request):
	return render(request, "numerm/cont/cont_distanceFormula.html")

def cont_graphLines(request):
	return render(request, "numerm/cont/cont_graphLines.html")

def cont_introFunctions(request):
	return render(request, "numerm/cont/cont_introFunctions.html")

def cont_functionBehaviors(request):
	return render(request, "numerm/cont/cont_introFunctions.html")

def cont_commonDomainMistakes(request):
	return render(request, "numerm/cont/cont_commonDomainMistakes.html")

def cont_graphsFunctions(request):
	return render(request, "numerm/cont/cont_graphsFunctions.html")

def cont_graphAbsoluteValue(request):
	return render(request, "numerm/cont/cont_graphAbsoluteValue.html")

def cont_graphExponential(request):
	return render(request, "numerm/cont/cont_graphExponential.html")

def cont_graphLog(request):
	return render(request, "numerm/cont/cont_graphLog.html")

def cont_graphSquaring(request):
	return render(request, "numerm/cont/cont_graphSquaring.html")

def cont_graphCubic(request):
	return render(request, "numerm/cont/cont_graphCubic.html")

def cont_graphReciprocal(request):
	return render(request, "numerm/cont/cont_graphReciprocal.html")

def cont_graphSquareRoot(request):
	return render(request, "numerm/cont/cont_graphSquareRoot.html")

def cont_graphSemiCircle(request):
	return render(request, "numerm/cont/cont_graphSemiCircle.html")

def cont_piecewiseFunctions(request):
	return render(request, "numerm/cont/cont_piecewiseFunctions.html")

def cont_implicitFunctions(request):
	return render(request, "numerm/cont/cont_implicitFunctions.html")

def cont_graphAnalysis(request):
	return render(request, "numerm/cont/cont_graphAnalysis.html")

def cont_averageRateOfChange(request):
	return render(request, "numerm/cont/cont_averageRateOfChange.html")

def cont_functionComposition(request):
	return render(request, "numerm/cont/cont_functionComposition.html")

def cont_introTrigFunctions(request):
	return render(request, "numerm/cont/cont_introTrigFunctions.html")

def cont_trigFunctions(request):
	return render(request, "numerm/cont/cont_trigFunctions.html")

def cont_transcendentalFunctions(request):
	return render(request, "numerm/cont/cont_transcendentalFunctions.html")

# linear algebra functions
def lin_intro(request):
	return render(request, "numerm/lin/lin_intro.html")

def lin_systems(request):
	return render(request, "numerm/lin/lin_systems.html")

# calculus functions
def calc_preface(request):
	return render(request, "numerm/calc1/calc_preface.html")

def calc_reals(request):
	return render(request, "numerm/calc1/calc_reals.html")

def calc_thederivative(request):
	return render(request, "numerm/calc1/calc_thederivative.html")

def calc_derivativePowerFunction(request):
	return render(request, "numerm/calc1/calc_derivativePowerFunction.html")

def calc_rateOfChange(request):
	return render(request, "numerm/calc1/calc_rateOfChange.html")

def calc_limits(request):
	return render(request, "numerm/calc1/calc_limits.html")

def calc_trigDerivatives(request):
	return render(request, "numerm/calc1/calc_trigDerivatives.html")

def calc_generalRules(request):
	return render(request, "numerm/calc1/calc_generalRules.html")

# Sequences & Series

def sqs_index(request):
	return render(request, "numerm/sqs/sqs_index.html")

def sqs_foundations(request):
	return render(request, "numerm/sqs/sqs_foundations.html")




