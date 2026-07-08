# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 저는 책을 읽다가 뒤 플레시라는 이름을 발견했어요. 뭔가… 프랑스어 같기도 하고요.
     5.97s  agent 발화 시작: 그 이름이 왠지 모르게 울림이 있네요.
     6.11s  user  발화 끝
     8.04s  agent 발화 끝
     8.37s  user  발화 시작: 네, 맞아요. 그런데 그 이름의 유래가 궁금해요. 뒤 플레시는 정확히 어디에서 온 이름인가요?
    14.35s  <ret> 발화 (turn3 첫 프레임)
    14.43s  agent 발화 시작: <ret> 아주 좋은 질문이에요. 이름의 기원을 추적하면 흥미로운 점이 많답니다. 뒤 플레시스는 프랑스에서 
    14.53s  user  발화 끝
    16.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.98s]: The surname du Plessis is of French origin, derived from the Old Frenc
    24.40s  agent 발화 끝
    25.27s  user  발화 시작: 아, 역시 프랑스 이름이었군요. 지금도 프랑스에서 흔한 이름인가요?
    29.11s  user  발화 끝
    29.34s  agent 발화 시작: 그 이름이 널리 퍼지긴 했지만, 역사적으로는 프랑스에서 가장 강한 뿌리를 가지고 있어요.
    34.62s  agent 발화 끝
    34.67s  user  발화 시작: 알겠습니다. 그런데 남아프리카에서도 그 이름을 본 적이 있어요. 어떻게 남아프리카까지 가게 된 건가요?
    39.62s  <ret> 발화 (turn7 첫 프레임)
    40.02s  agent 발화 시작: <ret> 정말 흥미로운 질문이에요. 17세기 후반에 위그노, 프랑스 개신교도들이 케이프 식민지에 정착하면서
    40.22s  user  발화 끝
    41.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.28s]: French Huguenots, Protestant refugees, settled in the Cape Colony of S
    49.80s  agent 발화 끝
    49.96s  user  발화 시작: 위그노… 그렇군요. 그분들은 기술자였거나 뭔가 특별한 일을 하셨나요? 남아프리카에서 뭘 하셨어요?
    56.08s  user  발화 끝
    56.47s  agent 발화 시작: 그분들은 주로 장인과 농부였고, 식민지 개발에 크게 기여했어요.
    60.85s  user  발화 시작: 흥미롭네요. [laugh] 프랑스어와 문화를 계속 유지하셨나요, 아니면 사라졌나요?
    60.86s  agent 발화 끝
    66.67s  agent 발화 시작: 처음에는 그분들의 언어를 유지했지만, 점차 네덜란드어와 다른 언어의 영향을 받았어요.
    66.82s  user  발화 끝
    73.07s  agent 발화 끝
    73.19s  user  발화 시작: 그러면 시간이 지나면서 뭔가 달라졌다는 거군요. 이름 발음도 바뀌었나요?
    77.10s  <ret> 발화 (turn13 첫 프레임)
    77.26s  agent 발화 시작: <ret> 문화가 융합되는 동안 발음이 변하는 경우는 흔해요. 뒤 플레시스라는 이름은 남아프리카에서 아프리칸
    77.41s  user  발화 끝
    79.02s  ⚡SPAN 주입 [d'=1.92s / d_lead=4.43s]: In South Africa, the pronunciation of “du Plessis” evolved to “duh ple
    87.22s  agent 발화 끝
    87.33s  user  발화 시작: “더 플레스”라니, 정말 많이 바뀌었네요! 프랑스 사람들은 알아들을 수 있을까요?
    92.32s  user  발화 끝
    92.47s  agent 발화 시작: 현대 프랑스 사람들에게는 알아듣기 어려울 수도 있겠네요. 언어는 끊임없이 변하니까요.
    98.35s  agent 발화 끝
    98.52s  user  발화 시작: 하지만 남아프리카에서는 여전히 흔한 성씨인가요?
   101.40s  <ret> 발화 (turn17 첫 프레임)
   101.47s  agent 발화 시작: <ret> 수세기에 걸쳐 남아프리카에 잘 정착했답니다. 2022년 기준으로 남아프리카에서 가장 흔한 성씨 5
   101.66s  user  발화 끝
   103.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.16s]: Du Plessis is among the most common surnames in South Africa, ranking 
   109.49s  agent 발화 끝
   109.69s  user  발화 시작: 57위… 꽤 높은 순위네요. 프랑스 농장에서 남아프리카까지, 정말 긴 여정이네요.
   115.32s  agent 발화 시작: 맞아요. 이름은 종종 역사, 이주, 적응의 흔적을 담고 있어요. 그 기원을 추적하는 것은 정말 특별한 경험이
   115.47s  user  발화 끝
   122.17s  agent 발화 끝
