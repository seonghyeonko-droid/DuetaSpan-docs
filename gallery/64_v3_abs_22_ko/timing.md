# v3_abs_22_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "서별",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-11",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-06-03",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2026-03-13",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-11-30",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-02",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-08-18",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-06-27",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요. 천팔백칠십삼년에 앤아버로 이사 온 대학이 어디였는 | S2 사실, 그 대학의 초기 이름이 좀 특이한데요. | S3 …그 이름의 뜻이 무엇인가요? | S4 네, 그렇군요. 시간 내주셔서 감사합니다.

     0.00s  user  발화 시작: 안녕하세요. 천팔백칠십삼년에 앤아버로 이사 온 대학이 어디였는지 알 수 있을까요?
     5.70s  agent 발화 시작: 와.
     5.70s  user  발화 끝
     6.11s  <ret> 발화 (turn2 첫 프레임)
     6.27s  agent 발화 시작: <ret> 아, 죄송해요. 그 부분에 대한 정보는 찾을 수 없었어요. 제가 아는 범위 내에서는 천팔백칠십삼년
     6.27s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.97s]: (no information found)
     6.27s  agent 발화 끝
    18.23s  user  발화 시작: 와.
    18.23s  agent 발화 끝
    18.80s  user  발화 시작: 음… 그렇군요. 그럼 미시간 대학교는 언제 설립되었는지 알려주시겠어요?
    18.80s  user  발화 끝
    23.36s  agent 발화 시작: 음.
    23.36s  user  발화 끝
    23.85s  <ret> 발화 (turn6 첫 프레임)
    23.93s  agent 발화 시작: <ret> 미시간 대학교는 원래 캐솔레피스티미아드라는 이름으로 천팔백십칠년에 설립되었고, 공식적으로는 천팔백
    23.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.27s]: The University of Michigan was founded in 1817, initially as the Catho
    23.93s  agent 발화 끝
    30.20s  user  발화 시작: 어머.
    30.20s  agent 발화 끝
    30.77s  agent 발화 시작: 미시간 대학교는 오랜 역사를 가지고 있네요.
    30.77s  user  발화 끝
    34.19s  user  발화 시작: 네네.
    34.19s  agent 발화 끝
    34.76s  user  발화 시작: 사실, 그 대학의 초기 이름이 좀 특이한데요.
    34.76s  user  발화 끝
    38.75s  agent 발화 시작: 캐솔레피스티미아드라는 이름이 조금 독특하죠—
    38.75s  user  발화 끝
    41.03s  user  발화 시작: …그 이름의 뜻이 무엇인가요?
    41.03s  agent 발화 끝
    43.22s  <ret> 발화 (turn13 첫 프레임)
    43.30s  agent 발화 시작: <ret> "캐솔레피스티미아드"는 그리스어 어근에서 유래되었는데, "보편적인 지식"이라는 뜻이래요. 대학의 
    43.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.54s]: The name "Catholepistemiad" is derived from Greek roots meaning "unive
    43.30s  user  발화 끝
    55.84s  agent 발화 시작: 그 이름에 담긴 뜻은 정말 깊이 있네요.
    55.84s  agent 발화 끝
    59.83s  user  발화 시작: 네, 그렇군요. 시간 내주셔서 감사합니다.
    59.83s  agent 발화 끝
    62.68s  user  발화 끝
