VERSION 5.00
Begin VB.Form Form18 
   AutoRedraw      =   -1  'True
   BackColor       =   &H00000000&
   ClientHeight    =   11280
   ClientLeft      =   120
   ClientTop       =   120
   ClientWidth     =   7485
   ControlBox      =   0   'False
   DrawStyle       =   5  'Transparent
   LinkTopic       =   "Form18"
   ScaleHeight     =   11280
   ScaleWidth      =   7485
   Begin VB.ListBox List1 
      BackColor       =   &H00404040&
      BeginProperty Font 
         Name            =   "Times New Roman"
         Size            =   14.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   9720
      Left            =   1080
      Style           =   1  'Checkbox
      TabIndex        =   0
      Top             =   480
      Width           =   5055
   End
   Begin VB.Image Image1 
      Height          =   7680
      Left            =   -480
      Picture         =   "Form18.frx":0000
      Top             =   4920
      Width           =   7680
   End
End
Attribute VB_Name = "Form18"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Dim cnt As Integer
Dim cnt1 As Integer
Private Sub DataGrid1_Click()
cnt = cnt + 1
temp = DataGrid1.Row
rec.MoveFirst
For t = 0 To temp - 1
rec.MoveNext
Next
List1.AddItem " " & cnt & ". " & rec.Fields(0) & " " & rec.Fields(1)
End Sub

Private Sub DataGrid1_DblClick()
End
End Sub

Private Sub Form_DblClick()

If rec.State = 1 Then rec.Close
rec.open "select * from demanded_services", con, adOpenKeyset, adLockOptimistic
temp = idgenerator
rec.AddNew
rec.Fields(0) = temp
rec.Fields(2) = reg_id
rec.Fields(1) = ""
For t = 0 To rec2.RecordCount - 1
If List1.Selected(t) = True Then
rec.Fields(3) = rec.Fields(3) & "," & t
End If
Next
rec.Fields(3) = rec.Fields(3) & ","
rec.Update
Unload Me
Unload Form17
End Sub

Private Sub Form_Load()
cnt = 0
connect

If rec2.State = 1 Then rec2.Close
rec2.open "select service_name,charge from services", con, adOpenKeyset, adLockOptimistic
While rec2.EOF <> True
cnt1 = cnt1 + 1
List1.AddItem cnt1 & ". " & rec2.Fields(0) & " " & ":-" & rec2.Fields(1)
rec2.MoveNext
temp = ""
Wend
End Sub

Private Sub Form_Terminate()
cnt = 0
End Sub

