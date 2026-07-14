# v3_pers_40_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_40",
#     "name": "채현",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-01",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-04-19",
#       "category": "music",
#       "text": "User likes listening to classical piano."
#     },
#     {
#       "date": "2026-03-23",
#       "category": "schedule",
#       "text": "User has rotating night shifts."
#     },
#     {
#       "date": "2026-01-23",
#       "category": "savings",
#       "text": "User is saving for a trip to Europe next year."
#     },
#     {
#       "date": "2025-12-04",
#       "category": "airline",
#       "text": "User usually flies with Cathay Pacific."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-30",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     },
#     {
#       "date": "2026-04-08",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     },
#     {
#       "date": "2026-03-31",
#       "title": "Studying for the TOEIC",
#       "bullets": [
#         "target score is 850",
#         "exam is in about six weeks"
#       ]
#     },
#     {
#       "date": "2026-03-17",
#       "title": "Selling a used bike",
#       "bullets": [
#         "a 3-year-old road bike",
#         "asking around 400k won"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 채현님. 저는 부나크스예요. 편안한 잠과 휴식을 위한 맞춤 솔루션을 제공하는 동반자라고 생각하시
     6.62s  user  발화 시작: 부나크스요? 이름이 꽤 독특하네요. 혹시 잠을 잘 못 자는 사람들을 돕는 일만 하시는 건가요?
     6.62s  agent 발화 끝
    13.24s  agent 발화 시작: 예.
    13.24s  user  발화 끝
    13.71s  agent 발화 시작: [happy] 잠뿐만 아니라, 스트레스 관리나 일상에서의 휴식 방법도 함께 고민해 드릴 수 있어요. 수면은 
    13.71s  agent 발화 끝
    23.17s  user  발화 시작: 예.
    23.17s  agent 발화 끝
    23.64s  agent 발화 시작: 좋은 수면을 위해서는 규칙적인 생활 습관이 정말 중요해요. 특히 매일 같은 시간에 잠자리에 들고 일어나는 것
    23.64s  user  발화 끝
    31.68s  user  발화 시작: …그런데 제가 요즘 너무 불안해서 잠들기가 너무 힘들어요. 혹시 불안감을 줄이는 방법도 알려주실 수 있나요?
    31.68s  agent 발화 끝
    38.77s  agent 발화 시작: 불안감 때문에 잠들기 힘든 건 흔한 일이에요. 심호흡을 하거나, 명상을 하는 것도 도움이 될 수 있고 —
    38.77s  user  발화 끝
    46.81s  agent 발화 시작: [sigh] 따뜻한 물로 샤워를 하거나, 가벼운 스트레칭을 하는 것도 몸과 마음을 편안하게 만들어 줄 거예요
    46.81s  agent 발화 끝
    53.90s  agent 발화 끝
