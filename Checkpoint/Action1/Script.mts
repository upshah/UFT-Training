Const minAcceptableScore  = 9.0
Browser("Advantage Shopping").Page("Advantage Shopping").Link("HeadphonesCategoryTxt").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("HeadphonesCategoryTxt")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Beats Studio 2 Over-Ear").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Beats Studio 2 Over-Ear")_;_script infofile_;_ZIP::ssf2.xml_;_
If Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("ProductScore").Exist Then
	wait 1
	score = Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("ProductScore").GetROProperty("innerText")
End If
score = cDbl(score)

If score >= minAcceptableScore  Then
	reporter.ReportEvent micPass, "checkRating", "Rating exceeded expectations. It was " & score  _
			& " and needed to exceed " & minAcceptableScore
else
	reporter.ReportEvent micFail , "check rating", "Rating is poor. It was " & score _
 				& " and needed to exceed " & minAcceptableScore
End If

'Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("ProductScore").Check CheckPoint("9.3") @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("9.3")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME")_;_script infofile_;_ZIP::ssf4.xml_;_
