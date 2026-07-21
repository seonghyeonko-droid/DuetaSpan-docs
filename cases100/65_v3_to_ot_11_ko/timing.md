# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "수민",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-24",
#       "category": "airline",
#       "text": "User usually flies with Cathay Pacific."
#     },
#     {
#       "date": "2026-05-21",
#       "category": "trip",
#       "text": "User is planning a trip to Jordan in August."
#     },
#     {
#       "date": "2026-05-05",
#       "category": "music",
#       "text": "User likes listening to 90s hip-hop."
#     },
#     {
#       "date": "2026-04-25",
#       "category": "emergency",
#       "text": "User's emergency contact is Marco."
#     },
#     {
#       "date": "2026-04-02",
#       "category": "sibling",
#       "text": "User has a younger sibling named Minjun."
#     },
#     {
#       "date": "2026-03-07",
#       "category": "schedule",
#       "text": "User has a four-day compressed week."
#     },
#     {
#       "date": "2026-02-01",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-05",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     },
#     {
#       "date": "2026-02-20",
#       "title": "Sorting out a visa",
#       "bullets": [
#         "applying for a working-holiday visa to Australia",
#         "asked about the bank-balance requirement"
#       ]
#     },
#     {
#       "date": "2025-12-11",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     },
#     {
#       "date": "2025-12-05",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 야구에서 골든 글러브를 가장 많이 받은 선수가 누구예요? | S2 잠깐만, 택배 왔나 봐… | S3 …— 문 좀 열어 줄래? | S4 아, 그렇군요. 매덕스 선수는 어떤 포지션이었죠?

     0.00s  user  발화 시작: 야구에서 골든 글러브를 가장 많이 받은 선수가 누구예요?
     3.34s  <ret> 발화 (turn1 첫 프레임)
     3.69s  agent 발화 시작: <ret> 음, 야구 선수에 대해 이야기하시는군요. 한번 알아볼게요.
     3.70s  user  발화 끝
     4.04s  ⚡SPAN 주입 [d'=0.71s / d_lead=3.65s]: Greg Maddux won a record nineteen Gold Glove Awards during his Major L
     7.34s  agent 발화 끝
     7.40s  agent 발화 시작: 메이저 리그 야구 역사상 골든 글러브를 가장 많이 받은 선수는 그렉 매덕스 선수입니다. 무려 열아홉 번이나 
    15.26s  agent 발화 끝
    15.43s  user  발화 시작: 여보, 오븐 타이머 울린다 — 좀 꺼 줄래?
    17.96s  user  발화 끝
    18.07s  user  발화 시작: 잠깐만, 택배 왔나 봐…
    20.22s  user  발화 끝
    22.29s  user  발화 시작: …— 문 좀 열어 줄래?
    23.56s  user  발화 끝
    23.57s  user  발화 시작: 아, 그렇군요. 매덕스 선수는 어떤 포지션이었죠?
    27.85s  <ret> 발화 (turn7 첫 프레임)
    27.96s  user  발화 끝
    28.09s  agent 발화 시작: <ret> 그렉 매덕스 선수는 우완 투수였고, 천구백팔십육년부터 이천팔년까지 메이저 리그에서 활약했습니다.
    28.99s  ⚡SPAN 주입 [d'=1.14s / d_lead=6.46s]: Greg Maddux was a right-handed pitcher who played in Major League Base
    34.55s  agent 발화 끝
