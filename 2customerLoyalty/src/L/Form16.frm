VERSION 5.00
Begin VB.Form Form16 
   BackColor       =   &H00000000&
   ClientHeight    =   11280
   ClientLeft      =   120
   ClientTop       =   -105
   ClientWidth     =   20250
   ControlBox      =   0   'False
   LinkTopic       =   "Form16"
   ScaleHeight     =   11280
   ScaleWidth      =   20250
   WindowState     =   2  'Maximized
   Begin VB.TextBox Text1 
      Height          =   335
      Left            =   12960
      TabIndex        =   4
      Top             =   1440
      Width           =   2655
   End
   Begin VB.TextBox Text2 
      Height          =   335
      Left            =   17280
      TabIndex        =   3
      Top             =   1440
      Width           =   2655
   End
   Begin VB.CommandButton Command2 
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
      Left            =   18360
      Style           =   1  'Graphical
      TabIndex        =   2
      Top             =   2040
      Width           =   1575
   End
   Begin VB.Timer Timer1 
      Interval        =   1000
      Left            =   5400
      Top             =   6600
   End
   Begin VB.Label Label3 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "Billing"
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
      Index           =   2
      Left            =   13440
      TabIndex        =   10
      Top             =   10200
      Width           =   585
   End
   Begin VB.Label Label3 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "Log-off"
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
      Index           =   3
      Left            =   15120
      TabIndex        =   9
      Top             =   10200
      Width           =   630
   End
   Begin VB.Label Label3 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "Demands"
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
      Index           =   1
      Left            =   11640
      TabIndex        =   8
      Top             =   10200
      Width           =   855
   End
   Begin VB.Label Label3 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "Sales"
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
      Index           =   0
      Left            =   10080
      TabIndex        =   7
      Top             =   10200
      Width           =   450
   End
   Begin VB.Label Label8 
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
      Left            =   11760
      TabIndex        =   6
      Top             =   1320
      Width           =   690
   End
   Begin VB.Label Label7 
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
      Left            =   16080
      TabIndex        =   5
      Top             =   1320
      Width           =   855
   End
   Begin VB.Label Label2 
      BackStyle       =   0  'Transparent
      BeginProperty Font 
         Name            =   "Times New Roman"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   495
      Left            =   17400
      TabIndex        =   1
      Top             =   10800
      Width           =   2295
   End
   Begin VB.Image Image2 
      Height          =   7680
      Left            =   0
      Picture         =   "Form16.frx":0000
      Top             =   3720
      Width           =   7680
   End
   Begin VB.Label Label1 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "Register"
      BeginProperty Font 
         Name            =   "Gabriola"
         Size            =   18
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   675
      Left            =   18960
      TabIndex        =   0
      Top             =   360
      Width           =   885
   End
   Begin VB.Image Image1 
      Height          =   960
      Left            =   360
      Picture         =   "Form16.frx":6A9F
      Top             =   240
      Width           =   3855
   End
End
Attribute VB_Name = "Form16"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Public ind As Integer
Private Sub Command2_Click()
connect
If rec2.State = 1 Then rec2.Close
rec2.open "select * from customer where customer_id = '" & Text1 & "' and customer_service_id = '" & Text2.Text & "'", con, adOpenKeyset, adLockOptimistic

If rec.State = 1 Then rec.Close
rec.open "select * from customer", con, adOpenKeyset, adLockOptimistic

If rec2.EOF <> True Then

If rec3.State = 1 Then rec3.Close
rec3.open "select * from cust where customer_id ='" & Text1.Text & "'", con, adOpenKeyset, adLockOptimistic

Y = msgbox1("Confirm Yourself..." & rec3.Fields(1) & "?")
If Y = 1 Then
temp = idgenerator
rec.AddNew
rec.Fields(0) = temp
rec.Fields(1) = rec2.Fields(1)
rec.Fields(2) = DateTime.Date
rec.Fields(3) = "SERVICE"
rec.Update

Dim ar(9)  As String
For t = 0 To 7
ar(t) = rec3.Fields(t + 1)
Next

For t = 0 To 7
Form17.servtxt1(t).Text = ar(t)
Next

Form17.Visible = True
Else
Text1.Text = ""
Text2.Text = ""
End If
serv = 2
Else
msgbox1 ("Register..please")
End If


End Sub

Private Sub Form_DblClick()
End
End Sub

Private Sub Form_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
Label1.ForeColor = vbWhite
For t = 0 To 3
Label3(t).ForeColor = vbWhite
Next
End Sub

Private Sub Label1_Click()
Form17.Visible = True
End Sub

Private Sub Label1_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
Label1.ForeColor = 16776960
End Sub

Private Sub Label3_Click(Index As Integer)
If ind = 0 Then
Unload Me
ElseIf ind = 1 Then
Form20.Show (1)
ElseIf ind = 2 Then
Form20.Show (1)
ElseIf ind = 3 Then
End
End If

End Sub

Private Sub Label3_MouseMove(Index As Integer, Button As Integer, Shift As Integer, x As Single, Y As Single)
ind = Label3(Index).Index
Label3(ind).ForeColor = 16776960
For t = 0 To 3
If t <> ind Then
Label3(t).ForeColor = vbWhite
End If
Next

End Sub

Private Sub Timer1_Timer()
Label2.Caption = DateTime.Time
End Sub
