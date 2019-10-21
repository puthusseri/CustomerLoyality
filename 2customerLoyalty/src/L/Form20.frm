VERSION 5.00
Begin VB.Form Form20 
   BackColor       =   &H00000000&
   ClientHeight    =   3525
   ClientLeft      =   8445
   ClientTop       =   6105
   ClientWidth     =   5415
   ControlBox      =   0   'False
   LinkTopic       =   "Form20"
   ScaleHeight     =   3525
   ScaleWidth      =   5415
   Begin VB.CommandButton Command2 
      Caption         =   "Delay"
      Height          =   315
      Left            =   1200
      TabIndex        =   3
      Top             =   3120
      Width           =   1095
   End
   Begin VB.CommandButton Command1 
      Caption         =   "Print"
      Height          =   195
      Left            =   1200
      TabIndex        =   2
      Top             =   3120
      Width           =   1095
   End
   Begin VB.ListBox List1 
      BackColor       =   &H00000000&
      BeginProperty Font 
         Name            =   "Gabriola"
         Size            =   15.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   3570
      Left            =   2520
      TabIndex        =   1
      Top             =   0
      Width           =   2895
   End
   Begin VB.ComboBox Combo1 
      Appearance      =   0  'Flat
      BackColor       =   &H00000000&
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
      Height          =   645
      Left            =   0
      TabIndex        =   0
      Top             =   0
      Width           =   2535
   End
End
Attribute VB_Name = "Form20"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Dim sum As Long
Private Sub Combo1_Click()
List1.Clear
sum = 0
If rec.State = 1 Then rec.Close
rec.open "select * from registration where car_reg_no='" & Combo1.Text & "'", con, adOpenKeyset, adLockOptimistic

If rec2.State = 1 Then rec2.Close
rec2.open "select * from demanded_services where registration_id = '" & rec.Fields(0) & "'", con, adOpenKeyset, adLockOptimistic
Dim str1 As String
str1 = rec2.Fields(3)
p = 1
For t = p To Len(str1) - 1
u1 = Mid(str1, t, 1)
If u1 = "," Then
For Y = t + 1 To Len(str1)
X1 = Mid(str1, Y, 1)
If X1 <> "," Then
u2 = u2 & X1
Else
GoTo l
End If
Next
l:
If rec3.State = 1 Then rec3.Close
rec3.open "select * from services", con, adOpenKeyset, adLockOptimistic
For k = 0 To Val(u2) - 1
rec3.MoveNext
Next
List1.AddItem rec3.Fields(1)
sum = sum + Val(rec3.Fields(2))
u2 = ""
t = Y - 1
X1 = ""
End If
Next
End Sub

Private Sub Command1_Click()
rec.Fields(3) = "DEL"
rec.Update
If rec2.State = 1 Then rec2.Close
rec2.open "select Customer_name,phone_no,homes_name,city,pin,state,car_reg_no,demand_id,needs from cust,demanded_services,registration where cust.customer_id=registration.customer_id and demanded_services.registration_id =registration.registration_id and car_reg_no='" & Combo1.Text & "'", con, adOpenKeyset, adLockOptimistic

Set DataReport3.DataSource = rec2
Unload Me
Dim u1 As String
u1 = rec2.Fields(8)
u1 = Mid(u1, 2, Len(u1) - 2)
DataReport3.Sections(3).Controls(28).Caption = u1
DataReport3.Sections(2).Controls(4).Caption = FormatDateTime(DateTime.Date, vbLongDate)
DataReport3.Sections(3).Controls(27).Caption = sum
sum = 0
DataReport3.Show
End Sub

Private Sub Command2_Click()
If Combo1.Text <> "" Then
Dim r As Date
If rec.State = 1 Then rec.Close
rec.open "select * from registration where car_reg_no ='" & Combo1.Text & "'", con, adOpenKeyset, adLockOptimistic
rec.MoveLast
o = inputbox1("Number Of Days Delay For...", "Delay")
If o = "" Then o = 0
r = rec.Fields(6)
o = r + o
rec.Fields(6) = o
rec.Update
Else
msgbox1 ("###Select From Combo...!!!!!")
End If
End Sub
Private Sub Form_DblClick()
Unload Me
End Sub

Private Sub Form_Load()
connect

Command1.Visible = False
Command2.Visible = False

If Form16.ind = 2 Then

If rec.State = 1 Then rec.Close
rec.open "select * from registration where date2 ='" & DateTime.Date & "' and status='ON' and service_type ='Pay' ", con, adOpenKeyset, adLockOptimistic
Command1.Visible = True

ElseIf Form16.ind = 1 Then

If rec.State = 1 Then rec.Close
MsgBox ("select * from registration where date2 > '" & DateTime.Date & "'")
rec.open "select * from registration where date2 > '" & DateTime.Date & "'", con, adOpenKeyset, adLockOptimistic
Command2.Visible = True

End If

If rec.EOF <> True Then
For t = 0 To rec.RecordCount - 1
Combo1.AddItem rec.Fields(1)
rec.MoveNext
Next
End If

End Sub

