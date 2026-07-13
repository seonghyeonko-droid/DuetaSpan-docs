# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "정안",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-06-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-02-05",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-12-23",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-12-01",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-11-03",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-18",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 인도 대통령이나 총리가 누구야? | S2 그럼 지금 총리는 누구야? | S3 잠깐만, 엄마한테 전화 좀 해야 돼. | S4 와, 엄청 많네.

     0.00s  user  발화 시작: 인도 대통령이나 총리가 누구야?
     1.79s  <ret> 발화 (turn1 첫 프레임)
     2.01s  agent 발화 시작: <ret> 인도 대통령은 람 나트 코빈드 님이십니다. 이천십칠년 칠월 이십오일에 취임하셨어요.
     2.01s  user  발화 끝
     2.99s  ⚡SPAN 주입 [d'=1.20s / d_lead=5.03s]: Ram Nath Kovind was the 14th and current president of India, assuming 
     7.05s  user  발화 시작: 음, 대통령이구나.
     7.05s  agent 발화 끝
     8.05s  agent 발화 시작: 대통령직은 중요한 자리죠. 나라를 대표하는 분이니까요.
     8.05s  user  발화 끝
    11.07s  user  발화 시작: 응.
    11.07s  agent 발화 끝
    11.58s  user  발화 시작: 그럼 지금 총리는 누구야?
    11.58s  user  발화 끝
    13.32s  <ret> 발화 (turn6 첫 프레임)
    13.59s  agent 발화 시작: <ret> 현재 인도 총리는 나렌드라 모디 님이십니다. 이천십사년 오월 이십육일부터 임기를 시작하셨어요.
    13.59s  user  발화 끝
    13.62s  ⚡SPAN 주입 [d'=0.30s / d_lead=5.54s]: Narendra Modi is the 14th and current prime minister of India, serving
    19.13s  user  발화 시작: 아, 모디 총리. 뉴스에서 많이 봤어.
    19.13s  agent 발화 끝
    22.15s  agent 발화 시작: 모디 총리님은 인도 경제 발전에 큰 역할을 하고 계시죠.
    22.15s  user  발화 끝
    26.68s  user  발화 시작: 잠깐만, 엄마한테 전화 좀 해야 돼.
    26.68s  agent 발화 끝
    29.70s  user  발화 시작: 아, 미안. 다시 얘기할게. 모디 총리님은 뭘 제일 잘해?
    29.70s  user  발화 끝
    34.19s  <ret> 발화 (turn11 첫 프레임)
    34.23s  agent 발화 시작: <ret> 총리님의 업적은 여러 가지가 있지만… '메이크 인 인디아', '디지털 인디아', '스와치 바라트 
    34.23s  user  발화 끝
    34.86s  ⚡SPAN 주입 [d'=0.66s / d_lead=2.52s]: Narendra Modi has been credited with policies such as Make in India, D
    48.33s  user  발화 시작: 와, 엄청 많네.
    48.33s  agent 발화 끝
    49.84s  agent 발화 시작: 맞아요. 인도 경제의 다양한 분야에서 긍정적인 변화를 이끌어내고 계시죠.
    49.84s  user  발화 끝
    54.37s  agent 발화 끝
