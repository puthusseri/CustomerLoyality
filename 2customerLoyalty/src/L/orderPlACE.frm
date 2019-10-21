VERSION 5.00
Begin VB.Form Form5 
   BackColor       =   &H00000000&
   BorderStyle     =   1  'Fixed Single
   ClientHeight    =   10890
   ClientLeft      =   -180
   ClientTop       =   210
   ClientWidth     =   19620
   ControlBox      =   0   'False
   LinkTopic       =   "Form5"
   MaxButton       =   0   'False
   MinButton       =   0   'False
   Picture         =   "orderPlACE.frx":0000
   ScaleHeight     =   10890
   ScaleWidth      =   19620
   Begin VB.CommandButton Command3 
      Appearance      =   0  'Flat
      BackColor       =   &H00C0C0C0&
      Caption         =   "Login"
      BeginProperty Font 
         Name            =   "Times New Roman"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   255
      Left            =   18240
      Style           =   1  'Graphical
      TabIndex        =   29
      Top             =   960
      Width           =   1575
   End
   Begin VB.TextBox Text2 
      Height          =   335
      Left            =   17160
      TabIndex        =   28
      Top             =   480
      Width           =   2655
   End
   Begin VB.TextBox Text1 
      Height          =   335
      Left            =   12840
      TabIndex        =   27
      Top             =   480
      Width           =   2655
   End
   Begin VB.CommandButton Command2 
      BackColor       =   &H00808080&
      Caption         =   "BOOK"
      BeginProperty Font 
         Name            =   "Times New Roman"
         Size            =   9.75
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   14400
      Style           =   1  'Graphical
      TabIndex        =   26
      Top             =   9960
      Width           =   2655
   End
   Begin VB.TextBox ordtxt1 
      BeginProperty Font 
         Name            =   "Century Schoolbook"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   -1  'True
         Strikethrough   =   0   'False
      EndProperty
      Height          =   360
      Index           =   7
      Left            =   14520
      TabIndex        =   25
      Top             =   5520
      Width           =   2775
   End
   Begin VB.TextBox ordtxt1 
      BeginProperty Font 
         Name            =   "Century Schoolbook"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   -1  'True
         Strikethrough   =   0   'False
      EndProperty
      Height          =   360
      Index           =   6
      Left            =   14520
      TabIndex        =   24
      Top             =   4800
      Width           =   2775
   End
   Begin VB.TextBox ordtxt1 
      BeginProperty Font 
         Name            =   "Century Schoolbook"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   -1  'True
         Strikethrough   =   0   'False
      EndProperty
      Height          =   360
      Index           =   5
      Left            =   6360
      TabIndex        =   23
      Top             =   9360
      Width           =   2775
   End
   Begin VB.TextBox ordtxt1 
      BeginProperty Font 
         Name            =   "Century Schoolbook"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   -1  'True
         Strikethrough   =   0   'False
      EndProperty
      Height          =   360
      Index           =   4
      Left            =   6360
      TabIndex        =   22
      Top             =   8520
      Width           =   2775
   End
   Begin VB.TextBox ordtxt1 
      BeginProperty Font 
         Name            =   "Century Schoolbook"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   -1  'True
         Strikethrough   =   0   'False
      EndProperty
      Height          =   360
      Index           =   3
      Left            =   6360
      TabIndex        =   21
      Top             =   7920
      Width           =   2775
   End
   Begin VB.TextBox ordtxt1 
      BeginProperty Font 
         Name            =   "Century Schoolbook"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   -1  'True
         Strikethrough   =   0   'False
      EndProperty
      Height          =   360
      Index           =   2
      Left            =   6360
      TabIndex        =   20
      Top             =   7080
      Width           =   2775
   End
   Begin VB.TextBox ordtxt1 
      BeginProperty Font 
         Name            =   "Century Schoolbook"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   -1  'True
         Strikethrough   =   0   'False
      EndProperty
      Height          =   360
      Index           =   1
      Left            =   6360
      TabIndex        =   19
      Top             =   6360
      Width           =   2775
   End
   Begin VB.CommandButton Command1 
      BackColor       =   &H00808080&
      Caption         =   "DONE"
      BeginProperty Font 
         Name            =   "Times New Roman"
         Size            =   9.75
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   14400
      Style           =   1  'Graphical
      TabIndex        =   18
      Top             =   9960
      Width           =   2655
   End
   Begin VB.ComboBox ordcmb2 
      BeginProperty Font 
         Name            =   "Century Schoolbook"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   -1  'True
         Strikethrough   =   0   'False
      EndProperty
      Height          =   360
      Left            =   14520
      TabIndex        =   13
      Text            =   "-SELECT-"
      Top             =   6240
      Width           =   2775
   End
   Begin VB.TextBox ordtxt1 
      BeginProperty Font 
         Name            =   "Century Schoolbook"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   -1  'True
         Strikethrough   =   0   'False
      EndProperty
      Height          =   360
      Index           =   0
      Left            =   6360
      TabIndex        =   12
      Top             =   5520
      Width           =   2775
   End
   Begin VB.ComboBox ordcmb1 
      BeginProperty Font 
         Name            =   "Century Schoolbook"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   -1  'True
         Strikethrough   =   0   'False
      EndProperty
      Height          =   360
      ItemData        =   "orderPlACE.frx":A19AD
      Left            =   6360
      List            =   "orderPlACE.frx":A19BA
      TabIndex        =   11
      Top             =   4800
      Width           =   1575
   End
   Begin VB.Label Label13 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "Password"
      BeginProperty Font 
         Name            =   "Gabriola"
         Size            =   14.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   525
      Left            =   15960
      TabIndex        =   31
      Top             =   360
      Width           =   855
   End
   Begin VB.Label Label9 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "User_ID"
      BeginProperty Font 
         Name            =   "Gabriola"
         Size            =   14.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   525
      Left            =   11640
      TabIndex        =   30
      Top             =   360
      Width           =   690
   End
   Begin VB.Label Label17 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      BeginProperty Font 
         Name            =   "Gabriola"
         Size            =   14.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   525
      Left            =   14760
      TabIndex        =   17
      Top             =   2400
      Width           =   45
   End
   Begin VB.Label ordlbl1 
      BeginProperty Font 
         Name            =   "Century Schoolbook"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   -1  'True
         Strikethrough   =   0   'False
      EndProperty
      Height          =   255
      Left            =   14520
      TabIndex        =   16
      Top             =   6960
      Width           =   2775
   End
   Begin VB.Label Label15 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "Date of   Delivery "
      BeginProperty Font 
         Name            =   "Gabriola"
         Size            =   14.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   525
      Left            =   12240
      TabIndex        =   15
      Top             =   6840
      Width           =   1530
   End
   Begin VB.Label Label14 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "Prefered Car Model"
      BeginProperty Font 
         Name            =   "Gabriola"
         Size            =   14.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   525
      Left            =   12240
      TabIndex        =   0
      Top             =   6120
      Width           =   1725
   End
   Begin VB.Label Label12 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "Email *"
      BeginProperty Font 
         Name            =   "Gabriola"
         Size            =   14.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   525
      Left            =   12240
      TabIndex        =   1
      Top             =   5520
      Width           =   645
   End
   Begin VB.Label Label11 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "Mobile *"
      BeginProperty Font 
         Name            =   "Gabriola"
         Size            =   14.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   525
      Left            =   12240
      TabIndex        =   2
      Top             =   4800
      Width           =   735
   End
   Begin VB.Image Image1 
      Height          =   960
      Left            =   3240
      Picture         =   "orderPlACE.frx":A19CC
      Top             =   2160
      Width           =   3855
   End
   Begin VB.Label Label10 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "City *"
      BeginProperty Font 
         Name            =   "Gabriola"
         Size            =   14.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   525
      Left            =   3600
      TabIndex        =   14
      Top             =   8520
      Width           =   480
   End
   Begin VB.Label Label8 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "Company Name"
      BeginProperty Font 
         Name            =   "Gabriola"
         Size            =   14.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   525
      Left            =   3600
      TabIndex        =   6
      Top             =   6360
      Width           =   1425
   End
   Begin VB.Label Label7 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "Communication Address*"
      BeginProperty Font 
         Name            =   "Gabriola"
         Size            =   14.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   525
      Left            =   3600
      TabIndex        =   5
      Top             =   7080
      Width           =   2310
   End
   Begin VB.Label Label6 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "Posta Code*"
      BeginProperty Font 
         Name            =   "Gabriola"
         Size            =   14.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   525
      Left            =   3600
      TabIndex        =   4
      Top             =   9360
      Width           =   1065
   End
   Begin VB.Label Label5 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "State*"
      BeginProperty Font 
         Name            =   "Gabriola"
         Size            =   14.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   525
      Left            =   3600
      TabIndex        =   3
      Top             =   7920
      Width           =   525
   End
   Begin VB.Label Label4 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "* fields are mandatory for us to process your request."
      BeginProperty Font 
         Name            =   "Gabriola"
         Size            =   14.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   525
      Left            =   3600
      TabIndex        =   9
      Top             =   4080
      Width           =   4665
   End
   Begin VB.Label Label3 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "Title"
      BeginProperty Font 
         Name            =   "Gabriola"
         Size            =   14.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   525
      Left            =   3600
      TabIndex        =   8
      Top             =   4800
      Width           =   405
   End
   Begin VB.Label Label2 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "Name *"
      BeginProperty Font 
         Name            =   "Gabriola"
         Size            =   14.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   525
      Left            =   3600
      TabIndex        =   7
      Top             =   5520
      Width           =   645
   End
   Begin VB.Label Label1 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "Please fill i your details"
      BeginProperty Font 
         Name            =   "Gabriola"
         Size            =   14.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   525
      Left            =   3600
      TabIndex        =   10
      Top             =   3360
      Width           =   2040
   End
End
Attribute VB_Name = "Form5"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False

Dim da
Dim temp3 As Integer




Private Sub Command1_Click()
For t = 0 To 7
If t = 1 And t = 2 Then
Else
If ordtxt1(t).Text = "" Then
msgbox1 ("Columns with * are mandetory")
Exit Sub
End If
End If
Next
If temp3 <> 2 Then
If rec.State = 1 Then
rec.Close
End If
rec.open "select * from cust", con, adOpenKeyset, adLockOptimistic
temp = idgenerator
rec.AddNew
rec.Fields(0) = temp
For t = 0 To 7
rec.Fields(t + 1) = ordtxt1(t).Text
Next
rec.Fields(9) = "SALES"
rec.Update
End If
Form7.Visible = True
End Sub

Private Sub Command2_Click()
Command2.Visible = False
If rec2.State = 1 Then
rec2.Close
End If
rec2.open "select colour_id from colour where colour_name = '" & Form7.clr1(clr1no).Caption & "'" & " and model_id in (select model_id from model where model_name = '" & ordcmb2.Text & "' )", con, adOpenKeyset, adLockOptimistic
If rec3.State = 1 Then
rec3.Close
End If
rec3.open "select * from cust", con, adOpenKeyset, adLockOptimistic
If rec.State = 1 Then
rec.Close
End If
rec.open "select * from booking", con, adOpenKeyset, adLockOptimistic
temp2 = idgenerator
rec.AddNew
rec.Fields(0) = temp2
rec3.MoveLast
rec.Fields(1) = rec3.Fields(0)
rec.Fields(2) = rec2.Fields(0)
If rec3.State = 1 Then
rec3.Close
End If
rec3.open "select * from stock where status = 'ON' and colour_id = '" & rec2.Fields(0) & "'", con, adOpenKeyset, adLockOptimistic
If rec3.RecordCount <> 0 Then
rec.Fields(3) = DateTime.Date
rec.Fields(5) = DateTime.Date + 2
ordlbl1.Caption = dat + 2
rec.Fields(4) = "ON"
rec3.Fields(7) = "ISSUED - " & temp2
rec3.Update
Else
rec.Fields(3) = DateTime.Date
rec.Fields(5) = DateTime.Date + 7
ordlbl1.Caption = DateTime.Date + 7
rec.Fields(4) = "UNDER PROCESS"
End If
rec.Update

If temp3 <> 2 Then

If rec.State = 1 Then
rec.Close
End If
rec.open "select * from customer", con, adOpenKeyset, adLockOptimistic

If rec3.State = 1 Then
rec3.Close
End If
rec3.open "select * from cust", con, adOpenKeyset, adLockOptimistic
rec3.MoveLast
temp = idgenerator
rec.AddNew
rec.Fields(0) = temp
rec.Fields(1) = rec3.Fields(0)
rec.Fields(2) = dat
rec.Fields(3) = "SALES"
rec.Update

msgbox1 ("NOTE: .user-id: " & temp & " and  password: " & rec3.Fields(0))
End If

Form21.Show
End Sub


Private Sub Command3_Click()
If rec.State = 1 Then rec.Close
rec.open "select * from customer where customer_id = '" & Text1 & "' and customer_service_id = '" & Text2.Text & "'", con, adOpenKeyset, adLockOptimistic

If rec.EOF <> True Then
Command3.Enabled = False

r = rec.Fields(1)

If rec.State = 1 Then rec.Close
rec.open "select * from customer", con, adOpenKeyset, adLockOptimistic

temp3 = 2
temp = idgenerator

rec.AddNew
rec.Fields(0) = temp
rec.Fields(1) = r
rec.Fields(2) = DateTime.Date
rec.Fields(3) = "SALES"
rec.Update

If rec2.State = 1 Then rec2.Close
rec2.open "select * from cust where customer_id = '" & rec.Fields(1) & "'", con, adOpenKeyset, adLockOptimistic

For t = 0 To 7
ordtxt1(t) = rec2.Fields(t + 1)
Next

Else
msgbox1 ("Register please....")
End If
End Sub

Private Sub Form_DblClick()
Unload Form5
End Sub

Private Sub Form_Load()
If rec.State = 1 Then
rec.Close
End If
Command2.Visible = False
rec.open "select model_name from model where class_id in (select class_id from class where class_name = '" & Form2.barlbl2(bar1lblno).Caption & "')"
For t = 0 To rec.RecordCount - 1
ordcmb2.AddItem rec.Fields(0)
rec.MoveNext
Next

dat = DateTime.Date
da = FormatDateTime(dat, 1)
Label17.Caption = da
Form5.WindowState = 2

temp3 = 0
'EXCEl Start
'Set exl = CreateObject("Excel.Application")
'Set exlwb = exl.Workbooks.Add("E:\Book1.xlsm")
'Set exlws = exlwb.Worksheets(1)
'EXCEL End

End Sub

'Private Sub ordtxt5_Change()
''If Len(ordtxt5.Text) = 6 Then
''ie.Navigate "" & ordtxt5.Text
''htmldoc = ie.Document
''ordtxt6.Text = htmldoc.getElementById().innerText
''ordtxt7.Text = htmldoc.getElementById().innerText
''End If
'
'End Sub

Private Sub eras()

End Sub


Private Sub ordtxt1_KeyDown(Index As Integer, KeyCode As Integer, Shift As Integer)
tem = ordtxt1(Index).Text
If Index = 0 Or Index = 3 Or Index = 4 Then
Dim r As Integer
r = name_check(KeyCode)
ElseIf Index = 5 Or Index = 6 Then
r = num_check(KeyCode)
ElseIf Index = 9 Then
End If
If r = 1 Then
MsgBox ("Getting it Correct....")
ordtxt1(Index).Text = Mid(ordtxt1(Index).Text, 1, Len(ordtxt1(Index).Text) - 1)
End If
End Sub
