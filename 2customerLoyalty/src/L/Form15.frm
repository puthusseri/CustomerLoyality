VERSION 5.00
Begin VB.Form Form15 
   ClientHeight    =   1305
   ClientLeft      =   1845
   ClientTop       =   6345
   ClientWidth     =   7125
   ControlBox      =   0   'False
   Picture         =   "Form15.frx":0000
   ScaleHeight     =   1305
   ScaleWidth      =   7125
   Begin VB.Label Label1 
      BackStyle       =   0  'Transparent
      Caption         =   "Monthly Report"
      BeginProperty Font 
         Name            =   "Gabriola"
         Size            =   72
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   1935
      Left            =   0
      TabIndex        =   0
      Top             =   -600
      Width           =   7335
   End
End
Attribute VB_Name = "Form15"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Private Sub Label1_Click()
Unload Form15
Unload Form14
Form13.Show
End Sub
