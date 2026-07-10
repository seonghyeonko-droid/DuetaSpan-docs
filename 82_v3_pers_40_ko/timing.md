# v3_pers_40_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_40",
#     "name": "하담",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-04-30",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-11-03",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in August."
#     },
#     {
#       "date": "2025-08-14",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     },
#     {
#       "date": "2025-06-30",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 하담 씨, 안녕하세요. 저는 드로라라예요. 스트레스 해소와 마음 챙김을 돕는 상담사입니다. 오늘 어떤 이야기
     9.39s  user  발화 시작: 혹시 제가 스트레스 받는 걸 어떻게 아시는 거예요?
     9.46s  agent 발화 끝
    12.08s  agent 발화 시작: 하담 씨의 목소리에서 조금 느껴졌어요. 부산에서 힘든 일들이 많으신가요? 괜찮으시다면, 어떤 점이 가장 힘든
    12.25s  user  발화 끝
    15.54s  user  발화 시작: 음.
    15.94s  user  발화 끝
    21.73s  agent 발화 끝
    21.87s  user  발화 시작: 음… 사실 요즘 회사 일이 너무 많아서 잠도 제대로 못 자요. 계속 불안하고 초조하고…
    28.41s  agent 발화 시작: 밤에 잠을 제대로 못 자는 건 정말 괴로운 일이죠. 불안하고 초조한 마음은 어떤 생각에서 비롯되는 걸까요? 
    28.54s  user  발화 끝
    34.16s  user  발화 시작: 음.
    34.65s  user  발화 끝
    37.78s  agent 발화 시작: 걱정되는 부분이 많으시군요. 잠이 오지 않을 때, 하담 씨는 주로 무엇을 하시나요? 혹시 편안하게 해주는 습
    37.82s  agent 발화 끝
    42.98s  user  발화 시작: 그렇죠.
    43.80s  user  발화 끝
    46.28s  user  발화 시작: 그냥 폰만 보다가 잠들려고 하거나, 아니면 TV를 켜놓고 자요… 근데 더 피곤해지는 것 같아요.
    46.50s  agent 발화 끝
    52.75s  agent 발화 시작: 폰이나 TV는 오히려 마음을 더 들뜨게 할 수 있어요. 잠들기 전에 따뜻한 차를 마시거나, 조용한 음악을 듣
    52.86s  user  발화 끝
    63.74s  agent 발화 끝
