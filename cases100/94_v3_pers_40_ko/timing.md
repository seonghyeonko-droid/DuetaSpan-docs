# v3_pers_40_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_40",
#     "name": "수호",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-02-15",
#       "category": "dislike",
#       "text": "User can't stand durian."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "medication",
#       "text": "User takes insulin."
#     },
#     {
#       "date": "2026-01-16",
#       "category": "work",
#       "text": "User works as a dentist."
#     },
#     {
#       "date": "2025-12-24",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-12-19",
#       "category": "learning",
#       "text": "User is learning to play guitar."
#     },
#     {
#       "date": "2025-12-06",
#       "category": "floor",
#       "text": "User lives on the 2nd floor."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-27",
#       "title": "Comparing health insurance",
#       "bullets": [
#         "self-employed and needs dental",
#         "wants a low deductible"
#       ]
#     },
#     {
#       "date": "2025-12-03",
#       "title": "Booking a moving company",
#       "bullets": [
#         "moving a 2-bedroom apartment across town on the 30th",
#         "needs help disassembling furniture"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 수호님. 저는 루나예요. 삶의 동기를 찾고 다시 활력을 되찾도록 돕는 웰니스 코치랍니다.
     7.13s  agent 발화 끝
     7.68s  user  발화 시작: 근데 뭘 어떻게 도와주시는 건데요?
     8.49s  agent 발화 시작: 예.
     8.94s  agent 발화 끝
    10.27s  user  발화 끝
    10.43s  agent 발화 시작: [happy] 수호님, 지친 일상 속에서 잠시 멈춰 숨을 고르는 시간을 갖는 것부터 시작할 수 있어요. 깊게
    14.23s  user  발화 시작: 응응.
    14.73s  user  발화 끝
    20.44s  user  발화 시작: 음… 숨쉬기요? 그게 뭐가 그렇게 대단한데요?
    21.00s  agent 발화 끝
    24.70s  user  발화 끝
    24.92s  agent 발화 시작: [curious] 숨쉬기는 단순히 생명을 유지하는 행위를 넘어, 우리 몸과 마음을 연결하는 중요한 통로예요.
    39.71s  agent 발화 끝
