# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "예훈",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-29",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-12-02",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-11-05",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2025-10-11",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-08-14",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2025-06-14",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-28",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 아나님. 혹시 한국어의 이름이 뭐였죠? 까먹었어요 | S2 와, 꽤 오래됐네요. — | S3 잠깐만요, 혹시 세종대왕님은 한글 말고 다른 업적도 많으신가요 | S4 아, 정말 대단하시네요. 덕분에 한국어를 쉽게 배울 수 있게 

     0.00s  user  발화 시작: 안녕하세요, 아나님. 혹시 한국어의 이름이 뭐였죠? 까먹었어요.
     3.35s  <ret> 발화 (turn1 첫 프레임)
     3.59s  agent 발화 시작: <ret> 한국어의 고유한 이름은 한글이라고 합니다. 아주 과학적인 문자 체계예요.
     3.59s  ⚡SPAN 주입 [d'=1.60s / d_lead=4.61s]: Hangul, also spelled Hangeul, is the native alphabet of the Korean lan
     3.59s  user  발화 끝
     8.20s  user  발화 시작: 아.
     8.20s  agent 발화 끝
     8.71s  user  발화 시작: 네, 그렇군요. 그런데 한글은 언제 만들어졌나요?
     8.71s  user  발화 끝
    11.47s  <ret> 발화 (turn4 첫 프레임)
    11.79s  agent 발화 시작: <ret> 한글은 세종대왕께서 천사백사십육년에 발표하셨습니다. 백성을 위해 아주 쉽고 편리하게 만들었다고 해
    11.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.64s]: Hangul was proclaimed by King Sejong the Great in 1446.
    11.79s  user  발화 끝
    17.42s  user  발화 시작: 예.
    17.42s  agent 발화 끝
    17.94s  user  발화 시작: 와, 꽤 오래됐네요. —
    17.94s  user  발화 끝
    19.99s  user  발화 시작: 잠깐만요, 혹시 세종대왕님은 한글 말고 다른 업적도 많으신가요?
    19.99s  user  발화 끝
    24.08s  agent 발화 시작: 네네.
    24.08s  user  발화 끝
    24.28s  <ret> 발화 (turn9 첫 프레임)
    24.60s  agent 발화 시작: <ret> 세종대왕께서는 한글 창제 외에도 다양한 업적을 남기셨습니다. 과학 기술 발전에도 힘쓰셨죠.
    24.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.64s]: Sejong the Great is credited with advancements in science, military te
    24.60s  agent 발화 끝
    30.23s  agent 발화 시작: 과학 기술과 군사 기술, 농업 발전에 큰 기여를 하셨다고 합니다. 백성을 위한 마음이 정말 컸던 분이세요.
    30.23s  agent 발화 끝
    38.43s  user  발화 시작: 아, 정말 대단하시네요. 덕분에 한국어를 쉽게 배울 수 있게 됐어요.
    38.43s  agent 발화 끝
    43.56s  agent 발화 시작: 맞아요.
    43.56s  user  발화 끝
    44.07s  agent 발화 시작: 맞아요. 한글은 배우기 쉬운 문자라 외국인들도 금방 익힐 수 있다고 하죠. 저도 그렇게 생각합니다.
    44.07s  agent 발화 끝
    51.24s  agent 발화 끝
