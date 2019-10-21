Attribute VB_Name = "Module1"
Public date1 As Date
Public dat As Date
Public user As String
Public pa As String
Public reg_id As String 'car registration -hold
Public con As New ADODB.Connection
Public rec As New ADODB.Recordset
Public rec2 As New ADODB.Recordset
Public rec3 As New ADODB.Recordset
Public rec4 As New ADODB.Recordset
Public rec5 As New ADODB.Recordset
Public alrm As New ADODB.Recordset
Public con1 As New ADODB.Connection
Public toholdlp3
Public loc As String
Dim str As String
Public Nooforders As Integer
Public msgbox1value As Integer
Public serv As Integer
Public tblno As Integer
Public bar1lblno As Integer
Public bar3lblno As Integer
Public menulbl1no As Integer
Public dirlbl1no As Integer
Public clr1no As Integer
Public Sub connect()
If con.State = 1 Then
con.Close
End If
con.open "Driver=SQL Server;Server=LIN_WIN-PC\SQLEXPRESS;Database=benz;"
End Sub
Public Sub disp()
'nk
End Sub
Public Sub form2labelvis()
For t = 0 To 6
Form2.menulbl1(t).Visible = True
Next
End Sub

Public Sub labelonbarwhite()
Form2.barlbl1.ForeColor = vbWhite
For i = 0 To 12
Form2.barlbl2(i).ForeColor = vbWhite
Next
End Sub
Public Sub menulabelwhite()
For t = 0 To 6
Form2.menulbl1(t).ForeColor = vbWhite
Next
End Sub
Public Sub lplabel()
Form2.lp3.ForeColor = vbBlue
Form2.lp4.ForeColor = vbBlue
Form2.lp6.ForeColor = vbBlue
Form2.lp7.ForeColor = vbBlue
End Sub
Public Sub richtextshow()
Form2.lp3lbl2.ForeColor = vbWhite
Form2.lp3lbl3.ForeColor = vbWhite
Form2.lp3lbl4.ForeColor = vbWhite
Form2.lp3lbl5.ForeColor = vbWhite
Form2.lp3lbl6.ForeColor = vbWhite
Form2.lp3.ForeColor = 16711680
End Sub
Public Sub colouroffbar()
For t = 0 To 12
Form4.bar3lbl1(t).ForeColor = vbWhite
Next
End Sub
Public Sub lblcolouroff(temp As Integer)
For i = 0 To Form4.tbllbl1.Count - 1
If i = temp Then
Else
Form4.tbllbl1(i).ForeColor = vbWhite
End If
Next
End Sub
Public Sub barlblcolouroff()
For i = 0 To 12
If i = bar1lblno Then
Else
Form2.barlbl2(i).ForeColor = vbWhite
End If
Next
End Sub
Public Sub regpictbllblcolour()
For i = 0 To 9
Form4.tbllbl1(i).ForeColor = vbWhite
Next
End Sub
Public Sub hltcall()
Form2.rmlbl2.ForeColor = vbBlue
Form2.rmlbl3.ForeColor = vbBlue
Form2.rmlbl4.ForeColor = 8421504
Form2.rmlbl5.ForeColor = vbWhite
Form2.rmlbl6.ForeColor = vbWhite
Form2.rmlbl7.ForeColor = vbWhite
Form2.rtxt.FileName = rec.Fields(3)
Form2.disppic.Visible = False
Form2.modelpic.Visible = False
Form2.rmlbl1 = toholdlp3
Form2.rlblhide.Visible = True
Form2.rtxt.Visible = True
Form2.rmenupic.Visible = True
Form2.rmenupic2.Visible = False
Form2.Timer2.Enabled = False
Form2.rmenupic.Visible = True
richtextshow
End Sub
Public Sub designcall()

Form2.rmlbl4.ForeColor = vbBlue
Form2.rmlbl5.ForeColor = vbBlue
Form2.rmlbl2.ForeColor = 8421504
Form2.rmlbl3.ForeColor = vbWhite
Form2.rmlbl6.ForeColor = vbWhite
Form2.rmlbl7.ForeColor = vbWhite
Form2.rtxt.FileName = rec.Fields(4)
Form2.disppic.Visible = False
Form2.modelpic.Visible = False
Form2.rmlbl1 = toholdlp3
Form2.rlblhide.Visible = True
Form2.rtxt.Visible = True
Form2.rmenupic.Visible = True
Form2.rmenupic2.Visible = False
Form2.Timer2.Enabled = False
Form2.rmenupic.Visible = True
richtextshow
End Sub
Public Sub safetycall()

Form2.rmlbl4.ForeColor = vbBlue
Form2.rmlbl6.ForeColor = vbBlue
Form2.rmlbl2.ForeColor = 8421504
Form2.rmlbl3.ForeColor = vbWhite
Form2.rmlbl5.ForeColor = vbWhite
Form2.rmlbl7.ForeColor = vbWhite
Form2.rtxt.FileName = rec.Fields(5)
Form2.disppic.Visible = False
Form2.modelpic.Visible = False
Form2.rmlbl1 = toholdlp3
Form2.rlblhide.Visible = True
Form2.rtxt.Visible = True
Form2.rmenupic.Visible = True
Form2.rmenupic2.Visible = False
Form2.Timer2.Enabled = False
Form2.rmenupic.Visible = True
richtextshow
End Sub
Public Sub comfortcall()

Form2.rmlbl4.ForeColor = vbBlue
Form2.rmlbl7.ForeColor = vbBlue
Form2.rmlbl2.ForeColor = 8421504
Form2.rmlbl3.ForeColor = vbWhite
Form2.rmlbl6.ForeColor = vbWhite
Form2.rmlbl5.ForeColor = vbWhite
Form2.rtxt.FileName = rec.Fields(6)
Form2.disppic.Visible = False
Form2.modelpic.Visible = False
Form2.rmlbl1 = toholdlp3
Form2.rlblhide.Visible = True
Form2.rtxt.Visible = True
Form2.rmenupic.Visible = True
Form2.rmenupic2.Visible = False
Form2.Timer2.Enabled = False
Form2.rmenupic.Visible = True
richtextshow
End Sub
Public Sub modelcall()

Form2.rmlbl9.ForeColor = vbBlue
Form2.rmlbl10.ForeColor = vbWhite
Form2.rmlbl11.ForeColor = 8421504
Form2.rmlbl12.ForeColor = 8421504
Form2.rmlbl13.ForeColor = vbWhite
Form2.rmlbl14.ForeColor = vbWhite
Form2.rmlbl16.ForeColor = vbWhite
Form2.rtxt.FileName = rec.Fields(10)
Form2.disppic.Visible = False
Form2.modelpic.Visible = False
Form2.rmlbl15 = toholdlp3
Form2.rlblhide.Visible = True
Form2.rtxt.Visible = True
Form2.rmenupic.Visible = False
Form2.rmenupic2.Visible = True
Form2.Timer2.Enabled = False
Form2.rmenupic.Visible = True
richtextshow
End Sub
Public Sub Diesel()

Form2.rmlbl11.ForeColor = vbBlue
Form2.rmlbl12.ForeColor = vbBlue
Form2.rmlbl13.ForeColor = vbBlue
Form2.rmlbl9.ForeColor = vbWhite
Form2.rmlbl10.ForeColor = vbWhite
Form2.rmlbl14.ForeColor = vbWhite
Form2.rmlbl16.ForeColor = vbWhite
Form2.rtxt.FileName = rec.Fields(7)
Form2.disppic.Visible = False
Form2.modelpic.Visible = False
Form2.rmlbl15 = toholdlp3
Form2.rlblhide.Visible = True
Form2.rtxt.Visible = True
Form2.rmenupic.Visible = False
Form2.rmenupic2.Visible = True
Form2.Timer2.Enabled = False
Form2.rmenupic.Visible = True
richtextshow
End Sub
Public Sub Petrol()
Form2.rmenupic.Visible = False
Form2.rmenupic2.Visible = True
Form2.rmlbl11.ForeColor = vbBlue
Form2.rmlbl12.ForeColor = vbBlue
Form2.rmlbl14.ForeColor = vbBlue
Form2.rmlbl9.ForeColor = vbWhite
Form2.rmlbl10.ForeColor = vbWhite
Form2.rmlbl13.ForeColor = vbWhite
Form2.rmlbl16.ForeColor = vbWhite
Form2.rtxt.FileName = rec.Fields(8)
Form2.disppic.Visible = False
Form2.modelpic.Visible = False
Form2.rmlbl15 = toholdlp3
Form2.rlblhide.Visible = True
Form2.rtxt.Visible = True
Form2.Timer2.Enabled = False
Form2.rmenupic.Visible = True
richtextshow
End Sub
Public Sub stdeqp()
Form2.rmenupic.Visible = False
Form2.rmenupic2.Visible = True
Form2.rmlbl11.ForeColor = 8421504
Form2.rmlbl12.ForeColor = 8421504
Form2.rmlbl16.ForeColor = vbBlue
Form2.rmlbl9.ForeColor = vbWhite
Form2.rmlbl10.ForeColor = vbWhite
Form2.rmlbl13.ForeColor = vbWhite
Form2.rmlbl14.ForeColor = vbWhite
Form2.rtxt.FileName = rec.Fields(9)
Form2.disppic.Visible = False
Form2.modelpic.Visible = False
Form2.rmlbl15 = toholdlp3
Form2.rlblhide.Visible = True
Form2.rtxt.Visible = True
Form2.Timer2.Enabled = False
Form2.rmenupic.Visible = True
richtextshow
End Sub
Public Sub modelchange()
If Form9.Visible = True Then
Form9.Visible = False
End If
Form2.modelpic.Picture = LoadPicture(rec.Fields(2))
Form2.lp3lbl1.Caption = rec.Fields(11)
Form2.lp1.Caption = rec.Fields(11)
Form2.lp2.Caption = "BodyWork Available"
Form2.lp5.Caption = rec.Fields(12)
Form2.Command4.Caption = "Experience " & rec.Fields(11)
Form2.lp6.Caption = "Technical data"
Form2.lp7.Caption = "####    Place An ORDER"
bodytype
End Sub

Public Sub bodytype()
Form2.lp4.Caption = ""
Form2.lp8.Caption = ""
Form2.lp9.Caption = ""
If rec.State = 1 Then
rec.Close
End If
rec.open "select body_type from body_work where class_id in (select class_id from class where class_name = '" & Form2.barlbl2(bar1lblno).Caption & "')", con, adOpenKeyset, adLockOptimistic
If rec.EOF <> True Then
Form2.lp3.Caption = rec.Fields(0)
rec.MoveNext
End If
If rec.EOF <> True Then
Form2.lp4.Caption = rec.Fields(0)
rec.MoveNext
End If
If rec.EOF <> True Then
Form2.lp8.Caption = rec.Fields(0)
rec.MoveNext
End If
If rec.EOF <> True Then
Form2.lp9.Caption = rec.Fields(0)
End If
End Sub
Public Sub modelchange1()
If Form9.Visible = True Then
Form9.Visible = False
End If
Form11.modelpic.Picture = LoadPicture(rec.Fields(2))
Form11.lp1.Caption = rec.Fields(11)
Form11.lp5.Caption = rec.Fields(12)
End Sub

Function idgenerator() As String
Dim v0 As String

If rec.RecordCount <> 0 Then
rec.MoveLast
str1 = rec.Fields(0)
For t = 1 To Len(str1)
X1 = Mid(str1, t, 1)
If X1 = "." Then
GoTo l
End If
Next
l:
X2 = t

u1 = Mid(str1, 1, 1) '1st char
u2 = Mid(str1, 2, X2 - 2) '1st number
u3 = Mid(str1, X2 + 1, Len(str1) - (X2 + 1)) '2nd number
u4 = Mid(str1, Len(str1), 1) '2nd char

v1 = u1
v2 = u2
v3 = u3
v4 = u4

x3 = Asc(u4)

For t = 1 To Len(u2)
limit = limit & 9
Next
If x3 <> Asc("Z") Then
x3 = x3 + 1
v4 = Chr(x3)
ElseIf Val(u3) <> 9 Then
v4 = "A"
v3 = Val(u3) + 1
ElseIf Val(u2) <> limit Then
v4 = "A"
v3 = 1
v2 = Val(u2) + 1
Else
v4 = "A"
v3 = 1
v2 = limit & 0
End If
ID = u1 & v2 & "." & v3 & v4


Else
If rec.Fields(0).Name = "class_id" Then
ID = "C1.1A"
ElseIf rec.Fields(0).Name = "model_id" Then
ID = "M1.1A"
ElseIf rec.Fields(0).Name = "colour_id" Then
ID = "L1.1A"
ElseIf rec.Fields(0).Name = "customer_id" Then
ID = "U1.1A"
ElseIf rec.Fields(0).Name = "booking_id" Then
ID = "B1.1A"
ElseIf rec.Fields(0).Name = "stock_id" Then
ID = "S1.1A"
ElseIf rec.Fields(0).Name = "fitting_id" Then
ID = "F1.1A"
ElseIf rec.Fields(0).Name = "service_id" Then
ID = "R1.1A"
ElseIf rec.Fields(0).Name = "delivery_id" Then
ID = "D1.1A"
ElseIf rec.Fields(0).Name = "customer_service_id" Then
ID = "V1.1A"
ElseIf rec.Fields(0).Name = "registration_id" Then
ID = "G1.1A"
ElseIf rec.Fields(0).Name = "demand_id" Then
ID = "N1.1A"
ElseIf rec.Fields(0).Name = "fitting_demanded_id" Then
ID = "T1.1A"
End If
End If
idgenerator = ID
End Function

Function inputbox1(title As String, heading As String) As String
Form12.Label1.Caption = heading
Form12.Label2.Caption = title
Form12.Show (1)
inputbox1 = Form12.Text1.Text
Unload Form12
End Function

Function msgbox1(msg As String)
Form19.Label1.Caption = msg
Form19.Show vbModal
msgbox1 = msgbox1value
End Function


