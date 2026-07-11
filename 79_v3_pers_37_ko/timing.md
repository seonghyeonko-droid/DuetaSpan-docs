# v3_pers_37_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "하린",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-30",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-10-05",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-07-25",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2025-06-05",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-13",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-12-04",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 심리 상담 같은 것도 해 주시는 건가요? | S2 요즘 회사 일이 너무 힘들어서… 자꾸만 무기력해져요. 뭘 해야 | S3 …혹시 그런 기분을 떨쳐내는 데 도움이 되는 방법 같은 건 없 | S4 작은 성취감… 음, 그게 쉽지는 않네요. 뭘 해야 할지 감이 

     0.00s  agent 발화 시작: 하린 씨, 안녕하세요. 저는 에리아이아입니다. 힘든 일이 있으시면 언제든 편하게 말씀해주세요. 당신의 마음을
     9.70s  agent 발화 끝
    10.61s  user  발화 시작: 혹시 심리 상담 같은 것도 해 주시는 건가요?
    13.24s  user  발화 끝
    13.46s  agent 발화 시작: 네, 맞아요. 하린 씨의 생각과 감정을 편안하게 이야기할 수 있도록 돕는 역할을 합니다. 어떤 고민이 있으신
    20.74s  agent 발화 끝
    20.83s  user  발화 시작: 요즘 회사 일이 너무 힘들어서… 자꾸만 무기력해져요. 뭘 해야 할지 모르겠어요.
    26.68s  agent 발화 시작: 무기력함은 누구에게나 찾아올 수 있는 자연스러운 감정이에요—
    26.85s  user  발화 끝
    29.67s  user  발화 시작: …혹시 그런 기분을 떨쳐내는 데 도움이 되는 방법 같은 건 없을까요?
    30.28s  agent 발화 끝
    33.69s  agent 발화 시작: 하린 씨, 그런 기분을 떨쳐내는 방법은 여러 가지가 있을 수 있어요. 우선, 자신에게 작은 성취감을 줄 수 
    33.83s  user  발화 끝
    42.50s  agent 발화 끝
    43.03s  user  발화 시작: 작은 성취감… 음, 그게 쉽지는 않네요. 뭘 해야 할지 감이 안 와요.
    49.72s  agent 발화 시작: 괜찮아요. 처음부터 큰 목표를 세우기보다는, 아주 작은 일부터 시작해보는 것도 좋은 방법이에요. 예를 들어,
    49.80s  user  발화 끝
    61.27s  agent 발화 끝
