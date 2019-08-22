VERSION 5.00
Object = "{6BF52A50-394A-11D3-B153-00C04F79FAA6}#1.0#0"; "wmp.dll"
Begin VB.Form Form3 
   ClientHeight    =   10575
   ClientLeft      =   120
   ClientTop       =   450
   ClientWidth     =   18615
   ControlBox      =   0   'False
   LinkTopic       =   "Form3"
   Picture         =   "login-admin-guest.frx":0000
   ScaleHeight     =   10575
   ScaleWidth      =   18615
   StartUpPosition =   3  'Windows Default
   Begin VB.Timer Timer1 
      Interval        =   1000
      Left            =   240
      Top             =   120
   End
   Begin VB.CommandButton Command1 
      Cancel          =   -1  'True
      Caption         =   "Command1"
      Height          =   135
      Left            =   0
      TabIndex        =   1
      Top             =   0
      Width           =   15
   End
   Begin WMPLibCtl.WindowsMediaPlayer WindowsMediaPlayer1 
      Height          =   14400
      Left            =   0
      TabIndex        =   0
      Top             =   -1080
      Width           =   20730
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
      enabled         =   -1  'True
      enableContextMenu=   -1  'True
      fullScreen      =   0   'False
      SAMIStyle       =   ""
      SAMILang        =   ""
      SAMIFilename    =   ""
      captioningID    =   ""
      enableErrorDialogs=   0   'False
      _cx             =   36565
      _cy             =   25400
   End
End
Attribute VB_Name = "Form3"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Public i As Integer, x As Integer
Private Sub TabStrip1_Click()

End Sub
Private Sub Command1_Click()
Unload Form3
Form2.Show
form2labelvis
End Sub

Private Sub Form_Load()
x = 0
Form3.WindowState = 2
i = 1
WindowsMediaPlayer1.URL = "D:\uhd wallpapers\" & i & ".jpg"
End Sub

Private Sub Timer1_Timer()
x = x + 1
If x = 5 Then
WindowsMediaPlayer1.URL = "D:\uhd wallpapers\" & i & ".jpg"
x = 0
End If
End Sub

Private Sub WindowsMediaPlayer1_Click(ByVal nButton As Integer, ByVal nShiftState As Integer, ByVal fX As Long, ByVal fY As Long)
i = i + 1
If i = 7 Then
i = 0
End If
WindowsMediaPlayer1.URL = "D:\uhd wallpapers\" & i & ".jpg"
x = 0
End Sub




