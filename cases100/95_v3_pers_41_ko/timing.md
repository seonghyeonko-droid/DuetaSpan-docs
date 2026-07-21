# v3_pers_41_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_41",
#     "name": "수경",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "gym",
#       "text": "User has a gym membership near home."
#     },
#     {
#       "date": "2026-05-24",
#       "category": "employer",
#       "text": "User works at a regional bank."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "hobby",
#       "text": "User is into pottery."
#     },
#     {
#       "date": "2026-03-19",
#       "category": "phone",
#       "text": "User uses a Pixel 8."
#     },
#     {
#       "date": "2026-02-16",
#       "category": "sibling",
#       "text": "User has a younger sibling named Ava."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-12",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     },
#     {
#       "date": "2026-04-02",
#       "title": "Booking a moving company",
#       "bullets": [
#         "moving a 2-bedroom apartment across town on the 30th",
#         "needs help disassembling furniture"
#       ]
#     },
#     {
#       "date": "2026-01-10",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing the Kia Niro hybrid and Hyundai Ioniq",
#         "wants under 30k miles and below 25M won"
#       ]
#     },
#     {
#       "date": "2025-12-12",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 수경님. 저는 메앤이라고 해요. 괜찮으시다면, 함께 목표를 설정하고 실천하는 과정을 도와드리는 
    12.59s  user  발화 시작: 근데 웰니스 코치라는 게 정확히 뭘 하는 건가요?
    12.74s  agent 발화 끝
    15.77s  agent 발화 시작: 웰니스 코치는 건강한 습관을 만들고 유지하도록 돕는 사람이에요. 단순히 운동이나 식단 관리뿐만 아니라, 스트
    15.78s  user  발화 끝
    29.52s  user  발화 시작: 아, 그렇군요. 사실 요즘 좀 많이 지쳐서 뭘 해야 할지 잘 모르겠어요. 뭘 먼저 시작해야 할까요?
    29.62s  agent 발화 끝
    36.37s  user  발화 끝
    36.47s  agent 발화 시작: [sigh] 지치셨다니 마음이 아프네요. 우선, 아주 작은 성공 경험을 만드는 것부터 시작해 보는 건 어떠세
    53.86s  agent 발화 끝
