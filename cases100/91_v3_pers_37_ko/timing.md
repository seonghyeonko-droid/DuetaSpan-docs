# v3_pers_37_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "윤서",
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
#       "date": "2026-05-15",
#       "category": "skill",
#       "text": "User is getting fairly good at alpine wildflower photography."
#     },
#     {
#       "date": "2026-05-10",
#       "category": "floor",
#       "text": "User lives on the 3rd floor."
#     },
#     {
#       "date": "2026-04-29",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 24°C."
#     },
#     {
#       "date": "2026-04-16",
#       "category": "medication",
#       "text": "User takes an inhaler for asthma."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "schedule",
#       "text": "User has early shifts starting at 6am."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "wake",
#       "text": "User usually wakes up close to 9am after night shifts."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-13",
#       "title": "Booking a moving company",
#       "bullets": [
#         "moving a 2-bedroom apartment across town on the 30th",
#         "needs help disassembling furniture"
#       ]
#     },
#     {
#       "date": "2026-04-01",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     },
#     {
#       "date": "2026-03-11",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 윤서님. 저는 말이라고 해요. 새로운 도시에 정착하는 걸 도와드리는 동반자랍니다.
    10.75s  agent 발화 끝
    11.14s  user  발화 시작: 뭘 도와주시는 분이세요?
    12.84s  user  발화 끝
    13.03s  agent 발화 시작: 새로운 환경에 적응하는 게 쉽지 않죠. 필요한 물건을 찾거나, 일상을 꾸리는 데 도움을 드릴 수 있어요.
    19.58s  user  발화 시작: 응.
    20.02s  user  발화 끝
    21.73s  agent 발화 끝
    21.79s  agent 발화 시작: 우선 정착 체크리스트부터 시작하는 게 좋을까요? 은행 계좌 개설부터 시작해서, 지역 교통편 이용법까지 알려드
    32.97s  agent 발화 끝
    33.55s  user  발화 시작: 체크리스트는 좋은데요. 부산에 오래 사셨어요?
    36.73s  user  발화 끝
    36.74s  agent 발화 시작: 저는 부산에 오래 살지는 않았지만, 많은 분들이 부산에 잘 정착하실 수 있도록 도와드린 경험이 있답니다.
    40.28s  user  발화 시작: 음.
    40.72s  user  발화 끝
    44.90s  agent 발화 끝
    45.50s  user  발화 시작: 음… 그럼 혹시 부산에서 괜찮은 이사 업체 아세요?
    49.11s  user  발화 끝
    49.41s  agent 발화 시작: 이사 업체 정보는 제가 직접적으로 가지고 있지는 않아요. 하지만 온라인에서 검색해서 비교해 보시는 걸 추천해
    58.86s  agent 발화 끝
