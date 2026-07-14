# v3_pers_41_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_41",
#     "name": "보훈",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-01",
#       "category": "bloodtype",
#       "text": "User's blood type is A+."
#     },
#     {
#       "date": "2026-05-10",
#       "category": "diet",
#       "text": "User is dairy-free."
#     },
#     {
#       "date": "2026-04-29",
#       "category": "music",
#       "text": "User likes listening to indie folk."
#     },
#     {
#       "date": "2026-04-26",
#       "category": "hobby",
#       "text": "User is into urban sketching."
#     },
#     {
#       "date": "2026-04-22",
#       "category": "employer",
#       "text": "User works at a fintech startup."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "coffee",
#       "text": "User's usual coffee order is a flat white."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "streaming",
#       "text": "User subscribes to Twitch and Spotify."
#     },
#     {
#       "date": "2026-01-11",
#       "category": "savings",
#       "text": "User is saving for paying off student loans."
#     },
#     {
#       "date": "2025-12-04",
#       "category": "pet",
#       "text": "User has a Shiba Inu named Kongi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-08",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     },
#     {
#       "date": "2026-01-01",
#       "title": "Adopting a rescue dog",
#       "bullets": [
#         "looking at a 2-year-old Beagle mix",
#         "asked about crate training and vet costs"
#       ]
#     },
#     {
#       "date": "2025-12-29",
#       "title": "Buying a gift for a parent",
#       "bullets": [
#         "mom's 60th birthday next month",
#         "considering a spa day or a watch"
#       ]
#     },
#     {
#       "date": "2025-12-25",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 어… 부리요? 이름이 좀 특이하네요. 혹시 무슨… 상담 같은  | S2 음… 사실 여자 친구랑 계속 다투게 돼서 좀 지쳐요. 어떻게  | S3 주로 서로의 생각 차이 때문에 그래요. 제가 좀 완고한 편이라 | S4 네… 알겠어요. 혹시 그런 연습을 할 수 있는 방법 같은 게 

     0.00s  agent 발화 시작: [happy] 안녕하세요, 보훈 씨. 저는 부리예요. 혹시 지금 연애나 관계 때문에 마음이 좀 힘드신가요? 
     9.43s  user  발화 시작: 어… 부리요? 이름이 좀 특이하네요. 혹시 무슨… 상담 같은 걸 해주는 건가요?
     9.43s  agent 발화 끝
    14.81s  agent 발화 시작: 음.
    14.81s  user  발화 끝
    15.26s  agent 발화 시작: 네, 맞아요. 저는 연애나 관계에 대한 고민을 나누고, 좀 더 건강하고 행복한 관계를 만들어갈 수 있도록 돕
    15.26s  agent 발화 끝
    24.24s  user  발화 시작: 음… 사실 여자 친구랑 계속 다투게 돼서 좀 지쳐요. 어떻게 하면 좋을지 모르겠어요.
    24.24s  agent 발화 끝
    30.08s  agent 발화 시작: [curious] 여자 친구분과 자주 다투는군요. 다툼의 원인이 무엇인지, 어떤 점이 가장 힘든지 좀 더 자
    30.08s  user  발화 끝
    37.71s  user  발화 시작: 음.
    37.71s  agent 발화 끝
    38.15s  user  발화 시작: 주로 서로의 생각 차이 때문에 그래요. 제가 좀 완고한 편이라, 제 생각을 잘 안 굽히거든요.
    38.15s  user  발화 끝
    44.89s  agent 발화 시작: 음.
    44.89s  user  발화 끝
    45.34s  agent 발화 시작: [sigh] 완고한 성격 때문에 어려움을 겪고 계시는군요. 상대방의 의견을 존중하고, 열린 마음으로 대화하는
    45.34s  agent 발화 끝
    52.97s  user  발화 시작: 응응.
    52.97s  agent 발화 끝
    53.42s  user  발화 시작: 네… 알겠어요. 혹시 그런 연습을 할 수 있는 방법 같은 게 있을까요?
    53.42s  user  발화 끝
    58.80s  user  발화 끝
