f = open('test_SM2015IIADE.js', 'w')
numQ = 130
f.write("var questions = [\n\t{\n")

for i in range(1,numQ+1):
	f.write("\t\tname: \"SM2015iiADE" + str(i) + "\",\n" )
	f.write("\t\tsubject: \"\",\n")
	f.write("\t\tsub_subject: \"\",\n")
	f.write("\t\tprompt: false,\n")
	f.write("\t\timage: false,\n")
	f.write("\t\tquestion: \"\",\n")
	f.write("\t\tA: \"\",\n")
	f.write("\t\tB: \"\",\n")
	f.write("\t\tC: \"\",\n")
	f.write("\t\tD: \"\",\n")
	f.write("\t\tE: \"\",\n")
	f.write("\t\tCorrect: \"\"\n")
	if i < numQ:
		f.write("\t},\n\t{\n")
	else:
		f.write("\t}\n")
	
f.write("]")
