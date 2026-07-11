# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "현경",
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
#       "date": "2026-03-14",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-02-10",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-12-11",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2025-11-03",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-10-09",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-27",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-07-06",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 유튜브 구독자 제일 많은 사람이 누구야? | S2 아, 그렇구나. 그럼 그 다음으로 구독자 많은 사람은 누구야? | S3 엄청난 사람이네. 구독자 수 계속 변하잖아, 지금 MrBeas | S4 요즘 날씨 어때?

     0.00s  user  발화 시작: 유튜브 구독자 제일 많은 사람이 누구야?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.02s  agent 발화 시작: <ret> 현재 기준으로 유튜브에서 가장 많은 구독자를 보유한 개인은 PewDiePie인데, 구독자가 천백십
     0.02s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: PewDiePie has 111 million subscribers, making him the most subscribed 
     0.02s  user  발화 끝
     0.06s  <ret> 발화 (turn11 첫 프레임)
     0.07s  user  발화 시작: 천만 명 넘는다니, 진짜 대단하네. 근데 그 사람이 뭘로 유명해?
     0.07s  agent 발화 끝
     0.09s  <ret> 발화 (turn5 첫 프레임)
     0.10s  agent 발화 시작: 그분은 원래 게임 해설 영상으로 시작해서, 지금은 다양한 콘텐츠를 올리고 있어요.
     0.10s  user  발화 끝
     0.14s  user  발화 시작: 게임 말고 다른 영상도 올려? 어떤 거?
     0.14s  agent 발화 끝
     0.17s  agent 발화 시작: <ret> 게임 외에도 일상 브이로그나 코미디 스케치, 반응 영상 같은 다양한 콘텐츠를 올리고 있대요.
     0.17s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: PewDiePie's content includes vlogs, comedy sketches, and reaction vide
     0.17s  user  발화 끝
     0.22s  user  발화 시작: 응.
     0.22s  agent 발화 끝
     0.22s  user  발화 시작: 반응 영상? 그게 뭔데?
     0.22s  user  발화 끝
     0.23s  agent 발화 시작: 다른 사람의 영상이나 사건에 대한 자신의 반응을 보여주는 영상이에요.
     0.23s  user  발화 끝
     0.27s  user  발화 시작: 응.
     0.27s  agent 발화 끝
     0.27s  user  발화 시작: 아, 그렇구나. 그럼 그 다음으로 구독자 많은 사람은 누구야?
     0.27s  user  발화 끝
     0.30s  agent 발화 시작: <ret> 현재 유튜브에서 가장 많은 구독자를 보유한 채널은 MrBeast인데, 구독자가 일억 칠천팔백만 명
     0.30s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: MrBeast, with over 178 million subscribers, is currently the most subs
     0.30s  user  발화 끝
     0.35s  user  발화 시작: 와, PewDiePie보다 더 많네? 그…
     0.35s  agent 발화 끝
     0.36s  <ret> 발화 (turn17 첫 프레임)
     0.37s  user  발화 시작: …사람은 또 뭘 하는 사람이야?
     0.37s  user  발화 끝
     0.37s  <ret> 발화 (turn19 첫 프레임)
     0.38s  agent 발화 시작: MrBeast는 주로 기부나 엄청난 규모의 도전 과제를 수행하는 영상으로 유명해요.
     0.38s  user  발화 끝
     0.42s  user  발화 시작: 응.
     0.42s  agent 발화 끝
     0.42s  user  발화 시작: 도전 과제? 예를 들면?
     0.42s  user  발화 끝
     0.44s  agent 발화 시작: <ret> 스퀴드 게임 재현이나, 수백만 달러를 기부하거나, 아프리카에 우물을 파는 등 엄청난 규모의 도전 
     0.44s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: MrBeast has hosted challenges such as recreating Squid Game, giving aw
     0.44s  user  발화 끝
     0.49s  user  발화 시작: 엄청난 사람이네. 구독자 수 계속 변하잖아, 지금 MrBeast가 일위라는 거 확실해?
     0.49s  agent 발화 끝
     0.53s  agent 발화 시작: <ret> 포브스에 따르면 현재 MrBeast가 이억 사천사백만 명으로 일위이고, 그 다음이 티-Series
     0.53s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) MrBeast currently holds the top spot with 244 million su
     0.53s  user  발화 끝
     0.60s  user  발화 시작: 그래.
     0.60s  agent 발화 끝
     0.60s  user  발화 시작: 잠깐만, T-Series가 더 많네? MrBeast가 일위가 아니었구나 —
     0.60s  user  발화 끝
     0.63s  user  발화 시작: …그럼 T-Series는 개인 채널이 아니야? 회사 채널인가?
     0.63s  user  발화 끝
     0.66s  agent 발화 시작: 네, T-Series는 인도 최대의 음반사 겸 영화 제작사 채널이에요.
     0.66s  user  발화 끝
     0.69s  user  발화 시작: 아, 그렇구나. 그럼 개인 채널 중에 제일 많은 구독자는 MrBeast겠네?
     0.69s  agent 발화 끝
     0.69s  <ret> 발화 (turn27 첫 프레임)
     0.72s  agent 발화 시작: 네, 맞아요. 개인 채널 중에서는 MrBeast가 가장 많은 구독자를 보유하고 있어요.
     0.72s  user  발화 끝
     0.76s  user  발화 시작: 요즘 날씨 어때?
     0.76s  agent 발화 끝
     0.77s  agent 발화 시작: <ret> 현재 서울의 날씨는 이십삼도이고, 습도는 칠십사%, 바람은 시속 오 점 오킬로미터로 불고 있어요.
     0.77s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
     0.77s  user  발화 끝
     0.82s  user  발화 시작: 그래.
     0.82s  agent 발화 끝
     0.82s  user  발화 시작: 덥네. 잠 좀 자려고 하는데, 좋은 잠자리 환경에 대해 알려줄까?
     0.82s  user  발화 끝
     0.86s  agent 발화 시작: 편안한 잠자리를 위해 몇 가지 팁을 드릴게요. 방 온도를 시원하게 유지하고, 빛을 차단하고, 조용한 환경을 
     0.86s  user  발화 끝
     0.92s  user  발화 시작: 응.
     0.92s  agent 발화 끝
     0.93s  user  발화 시작: 빛을 차단하는 건 어떻게 해? 암막 커튼 같은 거?
     0.93s  user  발화 끝
     0.96s  agent 발화 시작: 네, 암막 커튼이나 수면 안대를 사용하면 빛을 효과적으로 차단할 수 있어요.
     0.96s  user  발화 끝
     1.00s  agent 발화 끝
