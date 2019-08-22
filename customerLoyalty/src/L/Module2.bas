Attribute VB_Name = "Module2"
Function name_check(key As Integer)
If (key >= 65 And key <= 90) Or key = 8 Or key = 32 Or key = 16 Or key = 20 Or key = 9 Or key = 46 Or (key >= 37 And key <= 40) Then
Else
name_check = 1
msgbox1 ("Invalid Character")
End If
End Function

Function num_check(key As Integer)
If key >= 48 And key <= 57 Or key = 8 Or key = 20 Or key = 46 Or (key >= 37 And key <= 40) Then
Else
num_check = 1
msgbox1 ("Inavalid Type")
End If
End Function

Public Function isEmail(email As String) As Boolean
Dim At As Integer
Dim oneDot As Integer
Dim twoDots As Integer
Dim sTemp As String
Dim iLen As Integer
Dim iCtr As Integer
Dim sChar As String
Dim e As Integer

At = InStr(1, email, "@", vbTextCompare)
If At = 0 Then
isEmail = False
Exit Function
End If
IsAlphaNumeric = True
e = At - 1
sTemp = Mid(email, 1, e)
iLen = Len(sTemp)
If iLen > 0 Then
For iCtr = 1 To iLen
sChar = Mid(sTemp, iCtr, 1)
If Not sChar Like "[0-9A-Za-z]" Then IsAlphaNumeric = False
Next

End If
    If IsAlphaNumeric = True Then
    isEmail = True
    oneDot = InStr(At + 2, email, ".", vbTextCompare)
    twoDots = InStr(At + 2, email, "..", vbTextCompare)
    If At = 0 Or oneDot = 0 Or Not twoDots = 0 Or Right(email, 1) = "." Then
    isEmail = False
    End If
    Else
    isEmail = False
    End If
End Function


