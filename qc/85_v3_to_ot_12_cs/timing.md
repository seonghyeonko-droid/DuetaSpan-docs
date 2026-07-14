# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Kim",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-28",
#       "category": "savings",
#       "text": "User is saving for a new car."
#     },
#     {
#       "date": "2026-03-06",
#       "category": "anniversary",
#       "text": "User's anniversary is November 1."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "coffee",
#       "text": "User's usual coffee order is a cappuccino with oat milk."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "show",
#       "text": "User is currently watching a stand-up comedy special."
#     },
#     {
#       "date": "2025-12-15",
#       "category": "pet",
#       "text": "User has a Maine Coon named Simba."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-05",
#       "title": "Refinancing a mortgage",
#       "bullets": [
#         "current rate is 4.2 percent",
#         "wants to compare 15- vs 30-year terms"
#       ]
#     },
#     {
#       "date": "2025-12-28",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 오리아스 씨. “How Long Will I Lo | S2 …전혀 생각지도 못했네요. | S3 아니, 엘리 굴딩이 분명히 불렀다고 생각했는데! | S4 고마워요, 오리아스 씨. 내기에서 지는 걸 막아줬네요! 제가 

     0.00s  user  발화 시작: 안녕하세요, 오리아스 씨. “How Long Will I Love You”를 제일 먼저 부른 사람이 누구인지
     9.60s  <ret> 발화 (turn1 첫 프레임)
     9.88s  agent 발화 시작: <ret> 아, 좋은 질문인데요! 사실은 더 워터보이스가 구십 년에 *Dream Harder* 앨범에 “Ho
     9.88s  user  발화 끝
     9.90s  ⚡SPAN 주입 [d'=0.30s / d_lead=9.38s]: The song “How Long Will I Love You” was first released by The Waterboy
    19.26s  user  발화 시작: 와.
    19.26s  agent 발화 끝
    19.76s  user  발화 시작: 정말요? 음…
    19.76s  user  발화 끝
    20.74s  user  발화 시작: …전혀 생각지도 못했네요.
    20.74s  user  발화 끝
    22.23s  user  발화 시작: 아니, 엘리 굴딩이 분명히 불렀다고 생각했는데!
    22.23s  user  발화 끝
    25.19s  user  발화 시작: …제가 틀렸나 봐요.
    25.19s  user  발화 끝
    26.67s  agent 발화 시작: 커버 곡들이 헷갈리기 쉬워요! 엘리 굴딩도 나중에 멋지게 불렀지만, 원곡은 확실히 더 워터보이스 거예요.
    26.67s  user  발화 끝
    33.59s  user  발화 시작: 고마워요, 오리아스 씨. 내기에서 지는 걸 막아줬네요! 제가 아는 것에 대해서만 이야기하는 게 좋을 것 같아
    33.59s  agent 발화 끝
    41.49s  agent 발화 시작: 배움을 열어두는 건 좋은 일이에요. 특히—아니, 오히려—자신이 잘 모르는 분야에 대해서는 더욱 그렇고요. 그
    41.49s  user  발화 끝
    49.39s  agent 발화 끝
