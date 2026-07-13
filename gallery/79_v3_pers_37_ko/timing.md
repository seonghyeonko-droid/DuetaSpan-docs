# v3_pers_37_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "준별",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-15",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-05-14",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-04-14",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-12-12",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-26",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-04-09",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 그런데 여행 상담은 제가 지금 당장 필요한 건 아니고… 좀 엉 | S2 잠깐만요, 근데 저는 원래 계획 세우는 걸 엄청 싫어하거든요. | S3 세 가지… 음, 그건 좀 해볼 만 하겠네요. 근데 그걸 어떻게 | S4 스스로에게 주는 선물… 그거 좋네요! 그럼 오늘 세 가지는 업

     0.00s  agent 발화 시작: 준별 씨, 안녕하세요! 저는 루나예요. 여행 계획이나 휴식에 대해 고민을 나누는 상담사 역할을 하고 있답니다
     6.83s  user  발화 시작: 그런데 여행 상담은 제가 지금 당장 필요한 건 아니고… 좀 엉망진창인 제 일상을 어떻게 정리해야 할지 봐주실
     6.83s  agent 발화 끝
    15.49s  agent 발화 시작: 일상 정리, 정말 중요한 문제예요. 우선, 하루를 아주 작은 단위로 나눠보는 건 어때요? 예를 들어, 삼십분
    15.49s  user  발화 끝
    28.24s  user  발화 시작: 와.
    28.24s  agent 발화 끝
    28.70s  agent 발화 시작: 작은 성공들이 쌓이면 성취감을 느끼면서 꾸준히 해낼 수 있을 거예요. 중요한 건 완벽하게 지키려고 애쓰지 않
    28.70s  user  발화 끝
    39.17s  user  발화 시작: 잠깐만요, 근데 저는 원래 계획 세우는 걸 엄청 싫어하거든요. 삼십분 단위라니… 너무 빡세게 느껴져요.
    39.17s  agent 발화 끝
    45.55s  agent 발화 시작: 아, 계획 자체를 싫어하시는군요. 그럼 좀 더 유연하게 접근해 볼까요? 꼭 시간을 정해두기보다는, ‘오늘 꼭
    45.55s  user  발화 끝
    57.39s  agent 발화 시작: 중요한 건, 너무 많은 걸 한꺼번에 하려고 하지 않는 거죠. 과도한 약속은 스트레스와 압도감을 느끼는 흔한 
    57.39s  agent 발화 끝
    73.33s  user  발화 시작: 세 가지… 음, 그건 좀 해볼 만 하겠네요. 근데 그걸 어떻게 정해야 할까요? 그냥 생각나는 대로?
    73.33s  agent 발화 끝
    80.62s  agent 발화 시작: [happy] 생각나는 대로도 좋지만, 중요한 것부터 정하는 게 좋아요. 예를 들어, 오늘 꼭 끝내야 할 업
    80.62s  user  발화 끝
    92.47s  user  발화 시작: 음.
    92.47s  agent 발화 끝
    92.92s  user  발화 시작: 스스로에게 주는 선물… 그거 좋네요! 그럼 오늘 세 가지는 업무, 운동, 그리고 맛있는 커피 한 잔으로 할게
    92.92s  user  발화 끝
   100.66s  agent 발화 시작: 예.
   100.66s  user  발화 끝
   101.12s  agent 발화 시작: 아주 좋은 선택이에요! 작은 보상을 통해 동기 부여를 하는 건 정말 효과적이랍니다. 혹시, 스트레스 해소를 
   101.12s  agent 발화 끝
   110.23s  agent 발화 끝
