VERSION 5.00
Object = "{6BF52A50-394A-11D3-B153-00C04F79FAA6}#1.0#0"; "wmp.dll"
Begin VB.Form a1 
   BackColor       =   &H00000000&
   BorderStyle     =   4  'Fixed ToolWindow
   ClientHeight    =   735
   ClientLeft      =   16035
   ClientTop       =   15
   ClientWidth     =   4440
   ControlBox      =   0   'False
   LinkTopic       =   "Form1"
   MaxButton       =   0   'False
   MinButton       =   0   'False
   Moveable        =   0   'False
   ScaleHeight     =   735
   ScaleWidth      =   4440
   ShowInTaskbar   =   0   'False
   Begin VB.Timer Timer2 
      Enabled         =   0   'False
      Interval        =   1000
      Left            =   1680
      Top             =   120
   End
   Begin VB.Timer Timer1 
      Interval        =   1000
      Left            =   720
      Top             =   120
   End
   Begin VB.Image Image1 
      Height          =   240
      Left            =   3840
      Picture         =   "Form1.frx":0000
      ToolTipText     =   "kkk"
      Top             =   240
      Width           =   240
   End
   Begin WMPLibCtl.WindowsMediaPlayer WindowsMediaPlayer1 
      Height          =   135
      Left            =   3120
      TabIndex        =   2
      Top             =   1200
      Width           =   855
      URL             =   ""
      rate            =   1
      balance         =   0
      currentPosition =   0
      defaultFrame    =   ""
      playCount       =   1
      autoStart       =   -1  'True
      currentMarker   =   0
      invokeURLs      =   -1  'True
      baseURL         =   ""
      volume          =   50
      mute            =   0   'False
      uiMode          =   "full"
      stretchToFit    =   0   'False
      windowlessVideo =   0   'False
      enabled         =   0   'False
      enableContextMenu=   -1  'True
      fullScreen      =   0   'False
      SAMIStyle       =   ""
      SAMILang        =   ""
      SAMIFilename    =   ""
      captioningID    =   ""
      enableErrorDialogs=   0   'False
      _cx             =   1508
      _cy             =   238
   End
   Begin VB.Shape Shape1 
      BorderColor     =   &H00C0C0C0&
      BorderWidth     =   8
      Height          =   735
      Left            =   0
      Top             =   0
      Width           =   4455
   End
   Begin VB.Label Label2 
      AutoSize        =   -1  'True
      BackColor       =   &H00000000&
      BeginProperty Font 
         Name            =   "Garamond"
         Size            =   12
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   270
      Left            =   1680
      TabIndex        =   1
      Top             =   120
      Width           =   60
   End
   Begin VB.Label Label1 
      AutoSize        =   -1  'True
      BackColor       =   &H00000000&
      BeginProperty Font 
         Name            =   "Garamond"
         Size            =   12
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   270
      Left            =   120
      TabIndex        =   0
      Top             =   120
      Width           =   60
   End
End
Attribute VB_Name = "a1"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Dim v
Dim x As Integer
Dim f As Integer

Private Sub Form_Click()
a5.Visible = True
End Sub

Private Sub Form_DblClick()
End
End Sub

Private Sub Form_Load()
connect
If alrm.State = 1 Then
alrm.Close
End If
alrm.open "select * from alarm", con, adOpenKeyset, adLockOptimistic

If alrm.RecordCount <> 0 Then
a3.alarm = alrm.Fields(0)
End If
x = 0
f = 0
End Sub

Private Sub Form_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
Label2.ForeColor = vbWhite
Label1.ForeColor = vbWhite
a6.Visible = False
End Sub

Private Sub Image1_Click()
a3.Visible = True
End Sub

Private Sub Image1_DblClick()
a3.Visible = False
alrm.Fields(0) = "40:40:40 PM"
alrm.Update
MsgBox ("ALARM OFF")
End Sub

Private Sub Image1_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
If alrm.Fields(0) = "40:40:40 PM" Then
Image1.ToolTipText = "OFF"
Else
Image1.ToolTipText = alrm.Fields(0)
End If

End Sub

Private Sub Label1_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
Label1.ForeColor = 16776960
Label2.ForeColor = vbWhite
End Sub

Private Sub Label2_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
Label2.ForeColor = 16776960
Label1.ForeColor = vbWhite
End Sub

Private Sub Timer1_Timer()
Label1.Caption = DateTime.Date
Label2.Caption = DateTime.Time
If Label2.Caption = a3.alarm Then
WindowsMediaPlayer1.Enabled = True
WindowsMediaPlayer1.URL = "D:\MUSIC\AkoN\08 Came To Do (Ft. Akon) - (www.SongsLover.pk).mp3"
a4.Visible = True
End If
If x = 0 Then
x = x + 1
Timi
End If
Dim r As String
r = FormatDateTime(DateTime.Time, vbLongTime)
If r = "3:00:00 PM" Then
a2.Visible = True
a2.Label1.Caption = "Good Evening"
Timer2.Enabled = True
ElseIf r = "12:00:00 PM" Then
a2.Visible = True
a2.Label1.Caption = "Good AfterNOON"
Timer2.Enabled = True
ElseIf r = "12:00:00 AM" Then
a2.Visible = True
a2.Label1.Caption = "Good Morning"
Timer2.Enabled = True
End If


End Sub

Private Sub Timi()
Dim x As String
x = FormatDateTime(DateTime.Time, vbShortTime)
x = Mid(x, 1, 2)
x = Val(x)
If x >= 15 Then
a2.Visible = True
a2.Label1.Caption = "GOOD EVENING"
WindowsMediaPlayer1.URL = "E:\WORKstation\project-clock\ge.mp3"
Timer2.Enabled = True
ElseIf x >= 12 Then
a2.Visible = True
a2.Label1.Caption = "GOOD AFTERNOON"
WindowsMediaPlayer1.URL = "E:\WORKstation\project-clock\ga.mp3"
Timer2.Enabled = True
ElseIf x > 0 Then
a2.Visible = True
a2.Label1.Caption = "GOOD MORNING"
WindowsMediaPlayer1.URL = "E:\WORKstation\project-clock\gm.mp3"
Timer2.Enabled = True
End If
End Sub

Private Sub Timer2_Timer()
f = f + 1
If f = 2 Then
Timer2.Enabled = True
a2.Visible = False
f = 0
Timer2.Enabled = False
End If

End Sub
