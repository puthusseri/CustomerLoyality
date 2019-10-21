VERSION 5.00
Begin VB.Form a3 
   BackColor       =   &H00000000&
   BorderStyle     =   3  'Fixed Dialog
   ClientHeight    =   675
   ClientLeft      =   16065
   ClientTop       =   795
   ClientWidth     =   4230
   ControlBox      =   0   'False
   LinkTopic       =   "Form16"
   MaxButton       =   0   'False
   MinButton       =   0   'False
   ScaleHeight     =   675
   ScaleWidth      =   4230
   ShowInTaskbar   =   0   'False
   Begin VB.TextBox Text1 
      BackColor       =   &H00000000&
      BeginProperty Font 
         Name            =   "Copperplate Gothic Bold"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   495
      Left            =   480
      MaxLength       =   2
      TabIndex        =   2
      Top             =   120
      Width           =   975
   End
   Begin VB.TextBox Text2 
      BackColor       =   &H00000000&
      BeginProperty Font 
         Name            =   "Copperplate Gothic Bold"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   495
      Left            =   1560
      MaxLength       =   2
      TabIndex        =   1
      Top             =   120
      Width           =   975
   End
   Begin VB.ComboBox Combo1 
      Height          =   315
      Left            =   2880
      Locked          =   -1  'True
      TabIndex        =   0
      Text            =   "AM"
      Top             =   240
      Width           =   855
   End
End
Attribute VB_Name = "a3"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False

Public alarm As String
Private Sub Combo1_Click()
Combo1.Locked = True
End Sub

Private Sub Combo1_DropDown()
Combo1.Locked = False
End Sub

Private Sub Form_DblClick()
If Mid(Text1.Text, 1, 1) = "0" Then
Text1.Text = Mid(Text1.Text, 2, 2)
End If
alarm = Text1.Text & ":" & Text2.Text & ":" & "00" & " " & Combo1.Text
dummy = MsgBox("ALARM SETED FOR " & alarm, , "ALARM")
If alrm.RecordCount = 0 Then
alrm.AddNew
Else
End If
alrm.Fields(0) = alarm
alrm.Update
a3.Visible = False
a1.Image1.Visible = True
End Sub

Private Sub Form_Load()
'alarm = alrm.Fields(0)
Combo1.AddItem "AM"
Combo1.AddItem "PM"
End Sub

Private Sub Text1_Change()
If Val(Text1.Text) > 12 Then
Text1.Text = ""
End If
If Len(Text1.Text) = 2 Then
Text2.SetFocus
End If

End Sub

Private Sub Text2_Change()
If Val(Text2.Text) > 59 Then
Text2.Text = ""
End If
If Len(Text2.Text) = 2 Then
Combo1.SetFocus
End If
End Sub


