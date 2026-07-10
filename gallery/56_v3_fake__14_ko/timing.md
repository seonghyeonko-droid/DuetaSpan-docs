# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "다민",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-26",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-11-09",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-10-10",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-14",
#       "category": "work",
#       "text": "User works as a graduate student."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-05-27",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 맘마미아 영화에서 'My Love My Life' 노래를 누가 | S2 비외른 울바에우스는 또 어떤 노래들을 만들었나요? | S3 아바 멤버들은 다들 어떻게 지내고 있나요? | S4 혹시 맘마미아 영화에 다른 유명한 작곡가들도 참여했나요?

     0.00s  user  발화 시작: 맘마미아 영화에서 'My Love My Life' 노래를 누가 썼는지 궁금해요.
     4.67s  <ret> 발화 (turn1 첫 프레임)
     4.83s  agent 발화 시작: <ret> 'My Love My Life'는 비외른 울바에우스가 작곡했어요.
     4.86s  user  발화 끝
     6.43s  ⚡SPAN 주입 [d'=1.76s / d_lead=4.31s]: Björn Ulvaeus wrote 'My Love My Life' from Mamma Mia!.
     9.14s  agent 발화 끝
     9.23s  user  발화 시작: 비외른 울바에우스는 또 어떤 노래들을 만들었나요?
    13.05s  <ret> 발화 (turn3 첫 프레임)
    13.21s  agent 발화 시작: <ret> 비외른 울바에우스는 아바(ABBA)의 멤버로도 활동했었죠. 정말 다양한 히트곡들을 만들었어요.
    13.26s  user  발화 끝
    15.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.71s]: Björn Ulvaeus is a member of the Swedish pop group ABBA.
    19.47s  <ret> 발화 (turn4 첫 프레임)
    19.87s  agent 발화 시작: <ret> 비외른 울바에우스는 스웨덴 팝 그룹 아바의 멤버였답니다.
    19.92s  agent 발화 끝
    21.47s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=4.91s]: (tool result) AAPL closed at 170.34 today.
    22.74s  user  발화 시작: 음.
    23.23s  user  발화 끝
    24.57s  agent 발화 시작: 아바의 노래들은 세대를 초월해서 많은 사랑을 받고 있죠.
    24.78s  agent 발화 끝
    28.36s  user  발화 시작: 아바 멤버들은 다들 어떻게 지내고 있나요?
    28.60s  agent 발화 끝
    31.13s  user  발화 끝
    31.13s  <ret> 발화 (turn8 첫 프레임)
    31.21s  agent 발화 시작: <ret> 아그네타 펠트스코그와 아니 프리드 링스타드는 여전히 음악 활동을 하고 계세요.
    33.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.00s]: Agnetha Fältskog and Anni-Frid Lyngstad are still active in the music 
    33.29s  user  발화 시작: 네.
    34.11s  user  발화 끝
    36.12s  user  발화 시작: 혹시 맘마미아 영화에 다른 유명한 작곡가들도 참여했나요?
    36.21s  agent 발화 끝
    39.74s  <ret> 발화 (turn11 첫 프레임)
    40.06s  agent 발화 시작: <ret> 베니 앤더슨도 맘마미아 영화 음악에 참여했답니다.
    40.15s  user  발화 끝
    40.94s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.79s]: Benny Andersson also contributed to the music for Mamma Mia!.
    43.67s  agent 발화 시작: 맘마미아는 정말 멋진 음악들이 많이 담겨있죠.
    43.85s  agent 발화 끝
    47.05s  agent 발화 끝
