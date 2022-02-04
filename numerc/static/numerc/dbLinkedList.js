const body = d3.select("body");
const doubleLinkedList = body
	.selectAll("div.dbLL")
	.selectAll("ul:not(:last-child)");
const doubleLinkedListChild = document.querySelector("div.dbLL ul");
const doubleLinkedListDimensions = {
	width: Math.floor(doubleLinkedListChild.clientWidth / 3),
	height: doubleLinkedListChild.clientHeight,
};
const doubleLinkedListSVG = doubleLinkedList
	.append("svg")
	.attr("width", doubleLinkedListDimensions.width)
	.attr("height", doubleLinkedListDimensions.height);
const doubleLinkedListNode = doubleLinkedListSVG.append("g");

doubleLinkedListNode // top line
	.append("line")
	.attr("class", "forwardArrow")
	.attr("x1", 0)
	.attr("x2", doubleLinkedListDimensions.width)
	.attr("y1", doubleLinkedListDimensions.height / 4)
	.attr("y2", doubleLinkedListDimensions.height / 4)
	.attr("stroke-width", "1px");

doubleLinkedListNode // top line arrow, top arm
	.append("line")
	.attr("class", "forwardArrow")
	.attr("x1", doubleLinkedListDimensions.width)
	.attr("y1", doubleLinkedListDimensions.height / 4)
	.attr("x2", doubleLinkedListDimensions.width - 5)
	.attr("y2", doubleLinkedListDimensions.height / 4 + 2)
	.attr("stroke-width", "1px");
doubleLinkedListNode // top line arrow, bottom arm
	.append("line")
	.attr("class", "forwardArrow")
	.attr("x1", doubleLinkedListDimensions.width)
	.attr("y1", doubleLinkedListDimensions.height / 4)
	.attr("x2", doubleLinkedListDimensions.width - 5)
	.attr("y2", doubleLinkedListDimensions.height / 4 - 2)
	.attr("stroke-width", "1px");

doubleLinkedListNode // bottom line
	.append("line")
	.attr("class", "backwardArrow")
	.attr("x1", 0)
	.attr("y1", doubleLinkedListDimensions.height / 1.5)
	.attr("x2", doubleLinkedListDimensions.width)
	.attr("y2", doubleLinkedListDimensions.height / 1.5)
	.attr("stroke-width", "1px");

doubleLinkedListNode // bottom line arrow, top arm
	.append("line")
	.attr("class", "backwardArrow")
	.attr("x1", 0)
	.attr("y1", doubleLinkedListDimensions.height / 1.5)
	.attr("x2", 5)
	.attr("y2", doubleLinkedListDimensions.height / 1.5 + 2)
	.attr("stroke-width", "1px");

doubleLinkedListNode // bottom line arrow, bottom arm
	.append("line")
	.attr("class", "backwardArrow")
	.attr("x1", 0)
	.attr("y1", doubleLinkedListDimensions.height / 1.5)
	.attr("x2", 5)
	.attr("y2", doubleLinkedListDimensions.height / 1.5 - 2)
	.attr("stroke-width", "1px");