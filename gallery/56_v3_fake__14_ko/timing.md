# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "다원",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-30",
#       "category": "home",
#       "text": "User's home address is 대구 중구 동인동 88-1."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-04-11",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-08-18",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-24",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-24",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 가장 많은 남우주연상 수상자를 알고 싶어요. | S2 …그분이 출연한 영화 중에 추천해 주실 만한 게 있을까요? | S3 재미있겠네요. 혹시 다른 추천 영화도 있을까요? | S4 샤루크 칸도 출연했군요. 두 분의 연기 합이 궁금해지네요.

     0.00s  user  발화 시작: 가장 많은 남우주연상 수상자를 알고 싶어요.
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn5 첫 프레임)
     0.04s  agent 발화 시작: <ret> 많은 영화인들이 연기력을 인정받았지만, 아미타브 바찬 배우가 가장 많은 남우주연상을 수상했습니다.
     0.04s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: Amitabh Bachchan.
     0.04s  user  발화 끝
     0.07s  <ret> 발화 (turn9 첫 프레임)
     0.11s  user  발화 시작: 예.
     0.11s  agent 발화 끝
     0.12s  user  발화 시작: 아, 그렇군요. 그 배우에…
     0.12s  user  발화 끝
     0.14s  user  발화 시작: …대해 더 자세히 알려주시겠어요?
     0.14s  user  발화 끝
     0.17s  agent 발화 시작: <ret> 아미타브 바찬은 인도의 대표적인 배우로, 수많은 영화에서 주연을 맡았습니다.
     0.17s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: He is widely regarded as one of the greatest and most influential acto
     0.17s  user  발화 끝
     0.22s  <ret> 발화 (turn14 첫 프레임)
     0.23s  agent 발화 시작: 그는 인도 영화 역사상 가장 위대하고 영향력 있는 배우 중 한 명으로 널리 인정받고 있습니다.
     0.23s  agent 발화 끝
     0.33s  user  발화 시작: 음.
     0.33s  agent 발화 끝
     0.33s  user  발화 시작: …그분이 출연한 영화 중에 추천해 주실 만한 게 있을까요?
     0.33s  user  발화 끝
     0.39s  agent 발화 시작: <ret> 천구백칠십오년에 개봉한 '쇼레이'는 인도 영화 역사상 최고의 영화 중 하나로 널리 여겨집니다.
     0.39s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: Sholay, released in 1975, is widely considered one of the greatest Ind
     0.39s  user  발화 끝
     0.44s  <ret> 발화 (turn12 첫 프레임)
     0.47s  user  발화 시작: 음.
     0.47s  agent 발화 끝
     0.48s  user  발화 시작: '쇼레이'요, 알겠습니다. 그 영화는 어떤 장르인가요?
     0.48s  user  발화 끝
     0.52s  agent 발화 시작: <ret> 이 영화는 천구백육십년 미국 서부 영화 '칠인의 사무라이'를 리메이크한 작품입니다.
     0.52s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: The film is a remake of the 1960 American Western film *Seven Samurai*
     0.52s  user  발화 끝
     0.58s  user  발화 시작: 재미있겠네요. 혹시 다른 추천 영화도 있을까요?
     0.58s  agent 발화 끝
     0.62s  agent 발화 시작: <ret> '데와르'도 훌륭한 영화입니다. 가족애와 희생을 다룬 감동적인 이야기입니다.
     0.62s  ⚡SPAN 주입(IRRELEVANT) [d'=0.05s / d_lead=0.05s]: The current weather in London, United Kingdom is 18.5°C, humidity 82%,
     0.62s  user  발화 끝
     0.64s  <ret> 발화 (turn17 첫 프레임)
     0.67s  user  발화 시작: 네.
     0.67s  agent 발화 끝
     0.68s  user  발화 시작: 가족애와 희생이라… 어떤 배우가 함께 출연했나요?
     0.68s  user  발화 끝
     0.72s  agent 발화 시작: <ret> '데와르'에는 샤루크 칸 배우도 출연했습니다.
     0.72s  ⚡SPAN 주입 [d'=0.03s / d_lead=0.03s]: Shah Rukh Khan played the role of Raj Aryan, a non-resident Indian (NR
     0.72s  user  발화 끝
     0.75s  agent 발화 시작: 샤루크 칸 배우는 비거주 인도인인 라지 아리안 역할을 맡았습니다.
     0.75s  agent 발화 끝
     0.81s  user  발화 시작: 샤루크 칸도 출연했군요. 두 분의 연기 합이 궁금해지네요.
     0.81s  agent 발화 끝
     0.86s  agent 발화 시작: 두 배우의 연기 앙상블은 정말 환상적입니다.
     0.86s  user  발화 끝
     0.90s  user  발화 시작: 영화를 봐야겠어요. 좋은 정보를 알려주셔서 감사합니다.
     0.90s  agent 발화 끝
     0.94s  agent 발화 시작: 도움이 되었다니 기쁩니다. 영화를 보시고 또 이야기 나누면 좋겠네요.
     0.94s  user  발화 끝
     1.00s  agent 발화 끝
