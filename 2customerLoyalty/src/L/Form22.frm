VERSION 5.00
Begin VB.Form Form22 
   BackColor       =   &H00000000&
   ClientHeight    =   6750
   ClientLeft      =   8175
   ClientTop       =   2565
   ClientWidth     =   6405
   ControlBox      =   0   'False
   LinkTopic       =   "Form22"
   ScaleHeight     =   6750
   ScaleWidth      =   6405
   Begin VB.TextBox Text2 
      Height          =   375
      Left            =   2880
      TabIndex        =   4
      Top             =   2640
      Width           =   2655
   End
   Begin VB.TextBox Text1 
      Height          =   375
      Left            =   2880
      TabIndex        =   3
      Top             =   1800
      Width           =   2655
   End
   Begin VB.CommandButton Close 
      Caption         =   "Close"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   12
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   495
      Left            =   1320
      TabIndex        =   0
      Top             =   5040
      Width           =   3495
   End
   Begin VB.Label Label2 
      Alignment       =   2  'Center
      BackStyle       =   0  'Transparent
      Caption         =   "Password"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   12
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFF00&
      Height          =   615
      Left            =   600
      TabIndex        =   2
      Top             =   2760
      Width           =   1935
   End
   Begin VB.Label Label1 
      Alignment       =   2  'Center
      BackStyle       =   0  'Transparent
      Caption         =   "User_ID"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   12
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFF00&
      Height          =   615
      Left            =   480
      TabIndex        =   1
      Top             =   1800
      Width           =   1935
   End
End
Attribute VB_Name = "Form22"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Private Sub Update_Click()

End Sub

Private Sub Close_Click()
If rec.State = 1 Then rec.Close
rec.open "select  * from pass where userid ='" & user & "' and password = '" & pa & "'", con, 3, 2
If rec.EOF <> True Then
rec.Fields(0) = Text1.Text
rec.Fields(1) = Text2.Text
rec.Update
Unload Me
End If
End Sub

Private Sub Form_Load()
If rec.State = 1 Then rec.Close
rec.open "select  * from pass where userid ='" & user & "' and password = '" & pa & "'", con, 3, 2
Text1 = rec.Fields(0)
Text2 = rec.Fields(1)
End Sub
