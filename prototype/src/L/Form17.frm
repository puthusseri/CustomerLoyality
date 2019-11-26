VERSION 5.00
Begin VB.Form Form17 
   ClientHeight    =   11280
   ClientLeft      =   360
   ClientTop       =   120
   ClientWidth     =   20010
   ControlBox      =   0   'False
   LinkTopic       =   "Form17"
   Picture         =   "Form17.frx":0000
   ScaleHeight     =   11280
   ScaleWidth      =   20010
   WindowState     =   2  'Maximized
   Begin VB.TextBox servtxt1 
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
      Index           =   9
      Left            =   14400
      TabIndex        =   25
      Top             =   6120
      Width           =   2775
   End
   Begin VB.TextBox servtxt1 
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
      Index           =   8
      Left            =   14400
      TabIndex        =   24
      Top             =   5400
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
      ItemData        =   "Form17.frx":A19AD
      Left            =   6240
      List            =   "Form17.frx":A19BA
      TabIndex        =   9
      Top             =   4080
      Width           =   1575
   End
   Begin VB.TextBox servtxt1 
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
      Left            =   6240
      TabIndex        =   8
      Top             =   4800
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
      Left            =   14280
      Style           =   1  'Graphical
      TabIndex        =   7
      Top             =   9360
      Width           =   2655
   End
   Begin VB.TextBox servtxt1 
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
      Left            =   6240
      TabIndex        =   6
      Top             =   5640
      Width           =   2775
   End
   Begin VB.TextBox servtxt1 
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
      Left            =   6240
      TabIndex        =   5
      Top             =   6360
      Width           =   2775
   End
   Begin VB.TextBox servtxt1 
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
      Left            =   6240
      TabIndex        =   4
      Top             =   7200
      Width           =   2775
   End
   Begin VB.TextBox servtxt1 
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
      Left            =   6240
      TabIndex        =   3
      Top             =   7800
      Width           =   2775
   End
   Begin VB.TextBox servtxt1 
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
      Left            =   6240
      TabIndex        =   2
      Top             =   8640
      Width           =   2775
   End
   Begin VB.TextBox servtxt1 
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
      Left            =   14400
      TabIndex        =   1
      Top             =   4080
      Width           =   2775
   End
   Begin VB.TextBox servtxt1 
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
      Left            =   14400
      TabIndex        =   0
      Top             =   4800
      Width           =   2775
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
      Left            =   3480
      TabIndex        =   23
      Top             =   2640
      Width           =   2040
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
      Left            =   3480
      TabIndex        =   22
      Top             =   4800
      Width           =   645
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
      Left            =   3480
      TabIndex        =   21
      Top             =   4080
      Width           =   405
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
      Left            =   3480
      TabIndex        =   20
      Top             =   3360
      Width           =   4665
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
      Left            =   3480
      TabIndex        =   19
      Top             =   7200
      Width           =   525
   End
   Begin VB.Label Label6 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "Postal Code*"
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
      Left            =   3480
      TabIndex        =   18
      Top             =   8640
      Width           =   1125
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
      Left            =   3480
      TabIndex        =   17
      Top             =   6360
      Width           =   2310
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
      Left            =   3480
      TabIndex        =   16
      Top             =   5640
      Width           =   1425
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
      Left            =   3480
      TabIndex        =   15
      Top             =   7800
      Width           =   480
   End
   Begin VB.Image Image1 
      Height          =   960
      Left            =   240
      Picture         =   "Form17.frx":A19CC
      Top             =   120
      Width           =   3855
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
      Left            =   12120
      TabIndex        =   14
      Top             =   4080
      Width           =   735
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
      Left            =   12120
      TabIndex        =   13
      Top             =   4800
      Width           =   645
   End
   Begin VB.Label Label14 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "Car Registrion No."
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
      Left            =   12120
      TabIndex        =   12
      Top             =   5400
      Width           =   1650
   End
   Begin VB.Label Label15 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "Service Type "
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
      Left            =   12120
      TabIndex        =   11
      Top             =   6120
      Width           =   1125
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
      Left            =   14640
      TabIndex        =   10
      Top             =   1680
      Width           =   45
   End
End
Attribute VB_Name = "Form17"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Private Sub Command1_Click()
For t = 0 To 7
If t = 1 And t = 2 Then
Else
If servtxt1(t).Text = "" Then
msgbox1 ("Columns with * are mandetory")
Exit Sub
End If
End If
Next
If serv <> 2 Then
If rec.State = 1 Then
rec.Close
End If
rec.open "select * from cust", con, adOpenKeyset, adLockOptimistic
temp = idgenerator
rec.AddNew
rec.Fields(0) = temp
For t = 0 To 7
rec.Fields(t + 1) = servtxt1(t).Text
Next
rec.Fields(9) = "SERVICE"
rec.Update

If rec.State = 1 Then rec.Close
rec.open "select * from customer", con, adOpenKeyset, adLockOptimistic
temp = idgenerator

If rec2.State = 1 Then
rec2.Close
End If
rec2.open "select * from cust", con, adOpenKeyset, adLockOptimistic
rec2.MoveLast
rec.AddNew
rec.Fields(0) = temp
rec.Fields(1) = rec2.Fields(0)
rec.Fields(2) = DateTime.Date
rec.Fields(3) = "SERVICE"
rec.Update
End If

If rec.State = 1 Then rec.Close
rec.open "select * from registration", con, adOpenKeyset, adLockOptimistic
temp = idgenerator
rec.AddNew
rec.Fields(0) = temp
rec.Fields(1) = servtxt1(8).Text
If serv <> 2 Then
rec.Fields(2) = rec2.Fields(0)
Else
rec.Fields(2) = Form16.Text1.Text
End If
rec.Fields(3) = "ON"
rec.Fields(5) = DateTime.Date 'current date
rec.Fields(6) = DateTime.Date + 7 'return date
rec.Fields(4) = servtxt1(9).Text
rec.Update
reg_id = temp
Form18.Show (1)
End Sub

Private Sub Form_DblClick()
Unload Me
End Sub

Private Sub Form_Load()
connect

End Sub

Private Sub servtxt1_Change(Index As Integer)
If Index = 5 Then
If Len(servtxt1(Index).Text) > 6 Then
msgbox1 ("A Pin Is Of Only 6 Digits")
servtxt1(Index).Text = Mid(servtxt1(Index).Text, 1, Len(servtxt1(Index).Text) - 1)
End If
End If
End Sub

Private Sub servtxt1_GotFocus(Index As Integer)
servtxt1(Index).ForeColor = Black
End Sub

Private Sub servtxt1_KeyDown(Index As Integer, KeyCode As Integer, Shift As Integer)
If Index = 0 Or Index = 3 Or Index = 4 Then
Dim r As Integer
r = name_check(KeyCode)
If r = 1 Then
MsgBox ("Make it Correct")
servtxt1(Index).Text = Mid(servtxt1(Index).Text, 1, Len(servtxt1(Index).Text) - 1)
End If
ElseIf Index = 5 Or Index = 6 Then
r = num_check(KeyCode)
If r = 1 Then
MsgBox ("Make it Correct")
servtxt1(Index).Text = Mid(servtxt1(Index).Text, 1, Len(servtxt1(Index).Text) - 1)
End If
ElseIf Index = 9 Then
If KeyCode = 80 Then
msgbox1 ("Pay")
servtxt1(Index).Text = ""
servtxt1(Index).Text = "Pay"
ElseIf KeyCode = 70 Then
servtxt1(Index).Text = ""
msgbox1 ("Free")
servtxt1(Index).Text = "Free"
ElseIf KeyCode = 8 Then
Else
msgbox1 ("Make it Good...Pay or Free")
End If
End If
End Sub

Private Sub servtxt1_LostFocus(Index As Integer)
If Index = 7 And Len(servtxt1(Index).Text) > 0 Then
x = isEmail(servtxt1(Index).Text)
If x = False Then
msgbox1 ("Invalid Email ID")
servtxt1(Index).Text = ""
End If
End If
End Sub
