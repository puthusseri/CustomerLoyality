VERSION 5.00
Begin VB.Form Form9 
   BackColor       =   &H00FFFFFF&
   BorderStyle     =   1  'Fixed Single
   ClientHeight    =   7455
   ClientLeft      =   2670
   ClientTop       =   2220
   ClientWidth     =   16140
   ControlBox      =   0   'False
   LinkTopic       =   "Form9"
   MaxButton       =   0   'False
   MinButton       =   0   'False
   ScaleHeight     =   7455
   ScaleWidth      =   16140
   Begin VB.Frame Frame2 
      BackColor       =   &H00FFFFFF&
      BorderStyle     =   0  'None
      Height          =   7455
      Left            =   -240
      TabIndex        =   2
      Top             =   0
      Width           =   855
      Begin VB.Image Image3 
         Height          =   1035
         Left            =   -840
         Picture         =   "admin.frx":0000
         Top             =   6480
         Width           =   33960
      End
   End
   Begin VB.Frame Frame1 
      BackColor       =   &H00FFFFFF&
      BorderStyle     =   0  'None
      Height          =   7455
      Left            =   15600
      TabIndex        =   1
      Top             =   0
      Width           =   855
      Begin VB.Image Image2 
         Height          =   1035
         Left            =   -240
         Picture         =   "admin.frx":2FDC
         Top             =   6480
         Width           =   33960
      End
   End
   Begin VB.Timer Timer1 
      Interval        =   40
      Left            =   12120
      Top             =   2040
   End
   Begin VB.PictureBox Picture1 
      Appearance      =   0  'Flat
      BackColor       =   &H80000005&
      BorderStyle     =   0  'None
      ForeColor       =   &H80000008&
      Height          =   6600
      Left            =   -33720
      Picture         =   "admin.frx":5FB8
      ScaleHeight     =   6600
      ScaleMode       =   0  'User
      ScaleWidth      =   4553.978
      TabIndex        =   0
      Top             =   -120
      Width           =   43320
   End
   Begin VB.Image Image1 
      Height          =   1035
      Left            =   0
      Picture         =   "admin.frx":39529
      Top             =   6480
      Width           =   33960
   End
End
Attribute VB_Name = "Form9"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Dim x As Long
Dim n As Integer

Private Sub Form_Deactivate()
Form2.bar(0).Height = 375
End Sub

Private Sub Form_Load()
Timer1.Enabled = False
x = -33720
n = 0
End Sub

Private Sub Frame1_Click()
If Picture1.Left > -13680 Then
Timer1.Enabled = False
Picture1.Left = -13680
ElseIf Picture1.Left > -28080 Then
Picture1.Left = -28080
End If
End Sub
Private Sub Frame2_Click()
If Picture1.Left = -28080 Then
Timer1.Enabled = False
Picture1.Left = -13680
ElseIf Picture1.Left = -13680 Then
Picture1.Left = 0
End If
End Sub

Private Sub Timer1_Timer()
If (x < -20) Then
x = x + 700
Picture1.Left = x
End If
End Sub


