# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "예서",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-24",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-05-14",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-05-01",
#       "category": "employer",
#       "text": "User works at a public university."
#     },
#     {
#       "date": "2026-03-23",
#       "category": "anniversary",
#       "text": "User's anniversary is July 8."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "streaming",
#       "text": "User subscribes to Twitch and Spotify."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-14",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     },
#     {
#       "date": "2026-02-11",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     },
#     {
#       "date": "2026-02-04",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     },
#     {
#       "date": "2025-12-20",
#       "title": "Switching phone plans",
#       "bullets": [
#         "uses about 30GB of data a month",
#         "wants to keep the same number"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 요즘 좀 힘든 일이 많았어. 기분 전환할 만한 영화라도 볼까  | S2 딱히 좋아하는 배우는 없는데, 너무 뻔하지 않은 영화였으면 좋 | S3 잠깐만, 그게 왜 갑자기 나와? 영화 추천해 달라고 했지. | S4 '러브 액츄얼리'… 제목은 들어본 것 같은데, 줄거리는 잘 모

     0.00s  user  발화 시작: 요즘 좀 힘든 일이 많았어. 기분 전환할 만한 영화라도 볼까 하는데, 추천해 줄 수 있어?
     7.02s  agent 발화 시작: 힘든 일들이 있으셨군요. 영화로 기분 전환하시는 건 정말 좋은 생각이에요. 어떤 장르를 좋아하시나요?
     7.02s  user  발화 끝
    13.10s  user  발화 시작: 응응.
    13.10s  agent 발화 끝
    13.57s  user  발화 시작: 음… 코미디나 로맨틱 코미디 같은 거 보고 싶어. 너무 무거운 건 싫어.
    13.57s  user  발화 끝
    19.18s  agent 발화 시작: 코미디나 로맨틱 코미디면 확실히 기분 전환에 도움이 될 거예요. 혹시 좋아하는 배우가 있으세요?
    19.18s  user  발화 끝
    25.26s  user  발화 시작: 딱히 좋아하는 배우는 없는데, 너무 뻔하지 않은 영화였으면 좋겠어.
    25.26s  agent 발화 끝
    29.38s  <ret> 발화 (turn6 첫 프레임)
    29.47s  agent 발화 시작: <ret> 흥미로운 배우 라그스 래글랜드가 출연한 'Meet the People' 이후 팔년하고 이백이십일 
    29.47s  user  발화 끝
    30.49s  ⚡SPAN 주입 [d'=1.11s / d_lead=8.89s]: Rags Ragland died 8 years and 220 days after starring in Meet the Peop
    38.36s  user  발화 시작: 응.
    38.36s  agent 발화 끝
    38.83s  user  발화 시작: 잠깐만, 그게 왜 갑자기 나와? 영화 추천해 달라고 했지.
    38.83s  user  발화 끝
    43.04s  agent 발화 시작: [laugh] 죄송해요, 잠시 엉뚱한 이야기를 했네요. 라그스 래글랜드에 대해 이야기하다 보니… 다시 영화 
    43.04s  user  발화 끝
    50.05s  user  발화 시작: 그래, 다시 영화 추천해 줘. 너무 슬프지 않은 걸로.
    50.05s  agent 발화 끝
    54.27s  agent 발화 시작: 그렇죠.
    54.27s  user  발화 끝
    54.73s  agent 발화 시작: 그럼 최근에 개봉한 로맨틱 코미디 '러브 액츄얼리'는 어떠세요? 평이 꽤 좋았어요.
    54.73s  agent 발화 끝
    59.88s  user  발화 시작: 아.
    59.88s  agent 발화 끝
    60.35s  user  발화 시작: '러브 액츄얼리'… 제목은 들어본 것 같은데, 줄거리는 잘 모르겠어.
    60.35s  user  발화 끝
    64.56s  agent 발화 시작: '러브 액츄얼리'는 여러 커플의 사랑 이야기를 따뜻하고 유쾌하게 그린 영화예요. 꼭 한번 보셨으면 좋겠어요.
    64.56s  user  발화 끝
    71.11s  agent 발화 끝
